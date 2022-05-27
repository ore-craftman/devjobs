import { JobForm } from "../../../components/JobForm/JobForm";
import { useAddJob } from "../../../hooks/useAddJob";
import { userState } from "../../../state/userState";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const AddNew = () => {
  const router = useRouter();
  const [userInstance] = useRecoilState(userState);
  if (!userInstance.keyMaster) router.push("/");

  const { err, addJob, initLoader } = useAddJob();

  const createHandler = ({
    jobTitle,
    jobType,
    jobRegion,
    jobDesc,
    companyName,
    companyUrl,
    applUrl,
    jobPay,
    jobReqirements,
    dailyTask,
  }) => {
    const jobData = {
      jobTitle,
      jobType,
      jobRegion,
      jobDesc,
      companyName,
      companyUrl,
      applUrl,
      jobPay,
      jobReqirements,
      dailyTask,
    };

    addJob(jobData);
  };
  return (
    <>
      <JobForm
        title="New Job"
        formHandler={createHandler}
        initLoader={initLoader}
        err={err}
      />
    </>
  );
};

export default AddNew;
