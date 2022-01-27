/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCustomerInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export type ModelCustomerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateCustomerInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateStepInput = {
  id?: string | null,
  name: string,
  sendEmail: boolean,
  stepTemplateId?: string | null,
};

export type ModelStepConditionInput = {
  name?: ModelStringInput | null,
  sendEmail?: ModelBooleanInput | null,
  and?: Array< ModelStepConditionInput | null > | null,
  or?: Array< ModelStepConditionInput | null > | null,
  not?: ModelStepConditionInput | null,
  stepTemplateId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Step = {
  __typename: "Step",
  id: string,
  name: string,
  sendEmail: boolean,
  template?: Template | null,
  createdAt: string,
  updatedAt: string,
  stepTemplateId?: string | null,
  owner?: string | null,
};

export type Template = {
  __typename: "Template",
  id: string,
  name: string,
  template: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStepInput = {
  id: string,
  name?: string | null,
  sendEmail?: boolean | null,
  stepTemplateId?: string | null,
};

export type DeleteStepInput = {
  id: string,
};

export type CreateTemplateInput = {
  id?: string | null,
  name: string,
  template: string,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  template?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
  template?: string | null,
};

export type DeleteTemplateInput = {
  id: string,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelStepFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sendEmail?: ModelBooleanInput | null,
  and?: Array< ModelStepFilterInput | null > | null,
  or?: Array< ModelStepFilterInput | null > | null,
  not?: ModelStepFilterInput | null,
  stepTemplateId?: ModelIDInput | null,
};

export type ModelStepConnection = {
  __typename: "ModelStepConnection",
  items:  Array<Step | null >,
  nextToken?: string | null,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  template?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items:  Array<Template | null >,
  nextToken?: string | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStepMutationVariables = {
  input: CreateStepInput,
  condition?: ModelStepConditionInput | null,
};

export type CreateStepMutation = {
  createStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStepMutationVariables = {
  input: UpdateStepInput,
  condition?: ModelStepConditionInput | null,
};

export type UpdateStepMutation = {
  updateStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStepMutationVariables = {
  input: DeleteStepInput,
  condition?: ModelStepConditionInput | null,
};

export type DeleteStepMutation = {
  deleteStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTemplateMutationVariables = {
  input: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStepQueryVariables = {
  id: string,
};

export type GetStepQuery = {
  getStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStepsQueryVariables = {
  filter?: ModelStepFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStepsQuery = {
  listSteps?:  {
    __typename: "ModelStepConnection",
    items:  Array< {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      template?:  {
        __typename: "Template",
        id: string,
        name: string,
        template: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      stepTemplateId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items:  Array< {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStepSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStepSubscription = {
  onCreateStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStepSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStepSubscription = {
  onUpdateStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStepSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStepSubscription = {
  onDeleteStep?:  {
    __typename: "Step",
    id: string,
    name: string,
    sendEmail: boolean,
    template?:  {
      __typename: "Template",
      id: string,
      name: string,
      template: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    stepTemplateId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTemplateSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTemplateSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTemplateSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    template: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
