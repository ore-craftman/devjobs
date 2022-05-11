import { JobForm } from "../../../components/JobForm/JobForm";

const AddNew = () => {
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

    // TODO: SEND Data to server and store, then redirect to job view page
    console.log("Create", jobData);
  };
  return (
    <>
      <JobForm title=" New Job" formHandler={createHandler} />
    </>
  );
};

export default AddNew;
