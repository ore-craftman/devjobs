import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

interface PropSchema {
  jobTitle: string;
  jobType: string;
  jobPay: number;
  jobDesc: string;
  jobRegion: string;
  applUrl: string;
  jobReqirements: string[];
  dailyTask: string[];
  companyName: string;
  companyUrl: string;
}

export const useAddJob = () => {
  const [err, setErr] = useState(null);
  const [initLoader, setInitLoader] = useState(false);
  const router = useRouter();

  const addJob = async (jobData: PropSchema) => {
    setInitLoader(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_JOB_ENDPOINT}/add`,
      jobData
    );

    if (res.status === 200) {
      const { status, data } = res.data;
      if (status !== "OK") {
        setErr(data);
        setInitLoader(false);
      } else {
        const { _id } = data;
        router.push(`/jobs/view/${_id}`);
      }
    } else {
      setErr("Oops.. something went wrong");
      setInitLoader(false);
    }
  };

  return { err, addJob, initLoader };
};
