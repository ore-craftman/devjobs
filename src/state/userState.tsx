import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    _id: "",
    email: "",
    firstname: "",
    hash: "",
    keyMaster: null,
    lastname: "",
    salt: "",
    status: null,
    token: "",
    updatedAt: "",
    createdAt: "",
  },
});
