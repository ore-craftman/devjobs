import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface PropShema {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  companyName?: string;
  companyUrl?: string;
}

export const useCreateUser = () => {
  const router = useRouter();
  const [err, setErr] = useState(null);
  const [initLoader, setInitLoader] = useState(false);

  const createHandler = async (userData: PropShema) => {
    setInitLoader(true);

    if (userData.password.length < 8) {
      setInitLoader(false);
      return setErr("Password must be at least 8 characters");
    }
    const data = {
      ...userData,
      keyMaster: userData.companyName ? true : false,
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/create`,
      data
    );

    if (res.status === 200) {
      const { status, data } = res.data;

      if (status !== "OK") {
        setErr(data);
      } else {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = `UID=${
          data._id
        }; expires=${date.toUTCString()}; path=/`;
        router.push("/jobs");
      }
    } else {
      setErr("Oops.. something went wrong");
    }

    setInitLoader(false);
  };

  return { err, createHandler, initLoader };
};
