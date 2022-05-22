import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../state/userState";
import axios from "axios";

export const useSession = () => {
  const [userInstance, setUserInstance] = useRecoilState(userState);
  const [UID, setUID] = useState("");

  const getUser = async (userId: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/account/${userId}`
    );
    if (res.data.status === "OK") return setUserInstance(res.data.message);
    else return console.log("Error fetching user", res);
  };

  useEffect(() => {
    const biscuit = document.cookie.split(";");
    let i = 0;
    while (i < biscuit.length) {
      if (biscuit[i].startsWith("UID")) {
        setUID(biscuit[i].split("=")[1]);
        break;
      }
      i++;
    }

    getUser(UID);
  }, [UID]);

  return [userInstance];
};
