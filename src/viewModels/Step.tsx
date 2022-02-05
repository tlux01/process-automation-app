import { Template } from "./Template";

type Step = {
  id: string;
  name: string;
  sendEmail: boolean;
  template: Template;
};

export type { Step };
