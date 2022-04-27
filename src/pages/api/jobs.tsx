import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

interface JobPreviewSchema {
  _id: string;
  title: string;
  type: string;
  company: string;
  location: string;
  remote: boolean;
  createdAt: Date;
  companyURL: string;
  desc: string;
  requirement: string[];
  activities: string[];
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const mockTitle = [
    "Frontend engineer",
    "Data scientist",
    "Backend engineer",
    "Frontend engineer",
    "Fullstack engineer",
    "Data scientist",
    "Backend engineer",
    "Fullstack engineer",
    "Frontend engineer",
  ];

  const jobsPrev: JobPreviewSchema[] = [...Array(9)].map((_, i) => {
    return {
      _id: faker.database.mongodbObjectId(),
      jobId: faker.database.mongodbObjectId(),
      title: mockTitle.map((value) => value)[i],
      type: "Full Time",
      company: faker.company.catchPhraseAdjective(),
      location: faker.address.country(),
      remote: true,
      createdAt: faker.date.recent(),
      desc: faker.lorem.lines(20),
      companyURL: faker.internet.domainName(),
      applicationURL: faker.internet.domainName(),
      requirement: [...Array(6)].map(() => faker.lorem.lines(1)),
      activities: [...Array(5)].map(() => faker.lorem.lines(1)),
    };
  });

  res.status(200).json({ jobsPrev });
};
