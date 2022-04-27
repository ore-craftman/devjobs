import { useState, useEffect } from "react";
import axios from "axios";

const useFetchJobs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //TODO run axios.get() jobs
    async function getData() {
      const response = await axios.get("/api/jobs-prev");
      setData(response);
    }

    getData();
  }, []);

  return [data];
};

export default useFetchJobs;
