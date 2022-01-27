import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StepMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Customer {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class Step {
  readonly id: string;
  readonly name: string;
  readonly sendEmail: boolean;
  readonly template?: Template;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly stepTemplateId?: string;
  constructor(init: ModelInit<Step, StepMetaData>);
  static copyOf(source: Step, mutator: (draft: MutableModel<Step, StepMetaData>) => MutableModel<Step, StepMetaData> | void): Step;
}

export declare class Template {
  readonly id: string;
  readonly name: string;
  readonly template: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Template, TemplateMetaData>);
  static copyOf(source: Template, mutator: (draft: MutableModel<Template, TemplateMetaData>) => MutableModel<Template, TemplateMetaData> | void): Template;
}