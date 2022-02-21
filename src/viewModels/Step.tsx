import { Template } from "../API";

type Step = {
  id: string;
  name: string;
  sendEmail: boolean;
  template: Template;
};

export type { Step };
