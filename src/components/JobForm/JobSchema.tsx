export interface JobSchema {
  jobName?: string;
  type?: string;
  region?: string;
  desc?: string;
  companyTitle?: string;
  companyURL?: string;
  applURL?: string;
  pay?: number;
  requirements?: string[];
  tasks?: string[];
  title: string;
  formHandler: any;
}
