import { WrapperMax } from "../../components/WrapperMax";
import type { NextPage } from "next";
import { JobFilter } from "../../components/JobFilter/JobFilter";
import { JobCard } from "../../components/JobCard";

const Jobs: NextPage = ({ data }: any) => {
  return (
    <WrapperMax>
      <JobFilter />
      <JobCard data={data} />
    </WrapperMax>
  );
};

export async function getServerSideProps({ req }) {
  const res = await fetch(
    `${
      process.env.ENVIRONMENT ? process.env.LOCAL_URL : process.env.REMOTE_URL
    }/api/jobs`
  );
  const data = await res.json();
  return { props: { data } };
}

export default Jobs;
