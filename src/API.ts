/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ModelWorkflowFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelWorkflowFilterInput | null > | null,
  or?: Array< ModelWorkflowFilterInput | null > | null,
  not?: ModelWorkflowFilterInput | null,
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

export type ModelWorkflowConnection = {
  __typename: "ModelWorkflowConnection",
  items:  Array<Workflow | null >,
  nextToken?: string | null,
};

export type Workflow = {
  __typename: "Workflow",
  id: string,
  name: string,
  steps?: ModelStepSequenceConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelStepSequenceConnection = {
  __typename: "ModelStepSequenceConnection",
  items:  Array<StepSequence | null >,
  nextToken?: string | null,
};

export type StepSequence = {
  __typename: "StepSequence",
  id: string,
  step?: Step | null,
  stepNumber?: number | null,
  workflow?: Workflow | null,
  createdAt: string,
  updatedAt: string,
  workflowStepsId?: string | null,
  stepSequenceStepId?: string | null,
  owner?: string | null,
};

export type Step = {
  __typename: "Step",
  id: string,
  name: string,
  sendEmail: boolean,
  description?: string | null,
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
  description?: string | null,
  stepTemplateId?: string | null,
};

export type ModelStepConditionInput = {
  name?: ModelStringInput | null,
  sendEmail?: ModelBooleanInput | null,
  description?: ModelStringInput | null,
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

export type UpdateStepInput = {
  id: string,
  name?: string | null,
  sendEmail?: boolean | null,
  description?: string | null,
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

export type CreateWorkflowInput = {
  id?: string | null,
  name: string,
};

export type ModelWorkflowConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelWorkflowConditionInput | null > | null,
  or?: Array< ModelWorkflowConditionInput | null > | null,
  not?: ModelWorkflowConditionInput | null,
};

export type UpdateWorkflowInput = {
  id: string,
  name?: string | null,
};

export type DeleteWorkflowInput = {
  id: string,
};

export type CreateStepSequenceInput = {
  id?: string | null,
  stepNumber?: number | null,
  workflowStepsId?: string | null,
  stepSequenceStepId?: string | null,
};

export type ModelStepSequenceConditionInput = {
  stepNumber?: ModelIntInput | null,
  and?: Array< ModelStepSequenceConditionInput | null > | null,
  or?: Array< ModelStepSequenceConditionInput | null > | null,
  not?: ModelStepSequenceConditionInput | null,
  workflowStepsId?: ModelIDInput | null,
  stepSequenceStepId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStepSequenceInput = {
  id: string,
  stepNumber?: number | null,
  workflowStepsId?: string | null,
  stepSequenceStepId?: string | null,
};

export type DeleteStepSequenceInput = {
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
  description?: ModelStringInput | null,
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

export type ModelStepSequenceFilterInput = {
  id?: ModelIDInput | null,
  stepNumber?: ModelIntInput | null,
  and?: Array< ModelStepSequenceFilterInput | null > | null,
  or?: Array< ModelStepSequenceFilterInput | null > | null,
  not?: ModelStepSequenceFilterInput | null,
  workflowStepsId?: ModelIDInput | null,
  stepSequenceStepId?: ModelIDInput | null,
};

export type CustomListWorkflowsQueryVariables = {
  filter?: ModelWorkflowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CustomListWorkflowsQuery = {
  listWorkflows?:  {
    __typename: "ModelWorkflowConnection",
    items:  Array< {
      __typename: "Workflow",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        items:  Array< {
          __typename: "StepSequence",
          createdAt: string,
          id: string,
          owner?: string | null,
          stepNumber?: number | null,
          stepSequenceStepId?: string | null,
          updatedAt: string,
          workflowStepsId?: string | null,
          step?:  {
            __typename: "Step",
            createdAt: string,
            id: string,
            name: string,
            owner?: string | null,
            sendEmail: boolean,
            stepTemplateId?: string | null,
            template?:  {
              __typename: "Template",
              createdAt: string,
              id: string,
              name: string,
              owner?: string | null,
              template: string,
            } | null,
          } | null,
        } | null >,
      } | null,
    } | null >,
  } | null,
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
    description?: string | null,
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
    description?: string | null,
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
    description?: string | null,
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

export type CreateWorkflowMutationVariables = {
  input: CreateWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type CreateWorkflowMutation = {
  createWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWorkflowMutationVariables = {
  input: UpdateWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type UpdateWorkflowMutation = {
  updateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWorkflowMutationVariables = {
  input: DeleteWorkflowInput,
  condition?: ModelWorkflowConditionInput | null,
};

export type DeleteWorkflowMutation = {
  deleteWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateStepSequenceMutationVariables = {
  input: CreateStepSequenceInput,
  condition?: ModelStepSequenceConditionInput | null,
};

export type CreateStepSequenceMutation = {
  createStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStepSequenceMutationVariables = {
  input: UpdateStepSequenceInput,
  condition?: ModelStepSequenceConditionInput | null,
};

export type UpdateStepSequenceMutation = {
  updateStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStepSequenceMutationVariables = {
  input: DeleteStepSequenceInput,
  condition?: ModelStepSequenceConditionInput | null,
};

export type DeleteStepSequenceMutation = {
  deleteStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
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
    description?: string | null,
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
      description?: string | null,
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

export type GetWorkflowQueryVariables = {
  id: string,
};

export type GetWorkflowQuery = {
  getWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWorkflowsQueryVariables = {
  filter?: ModelWorkflowFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkflowsQuery = {
  listWorkflows?:  {
    __typename: "ModelWorkflowConnection",
    items:  Array< {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStepSequenceQueryVariables = {
  id: string,
};

export type GetStepSequenceQuery = {
  getStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStepSequencesQueryVariables = {
  filter?: ModelStepSequenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStepSequencesQuery = {
  listStepSequences?:  {
    __typename: "ModelStepSequenceConnection",
    items:  Array< {
      __typename: "StepSequence",
      id: string,
      step?:  {
        __typename: "Step",
        id: string,
        name: string,
        sendEmail: boolean,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        stepTemplateId?: string | null,
        owner?: string | null,
      } | null,
      stepNumber?: number | null,
      workflow?:  {
        __typename: "Workflow",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      workflowStepsId?: string | null,
      stepSequenceStepId?: string | null,
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
    description?: string | null,
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
    description?: string | null,
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
    description?: string | null,
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

export type OnCreateWorkflowSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateWorkflowSubscription = {
  onCreateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWorkflowSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateWorkflowSubscription = {
  onUpdateWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWorkflowSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteWorkflowSubscription = {
  onDeleteWorkflow?:  {
    __typename: "Workflow",
    id: string,
    name: string,
    steps?:  {
      __typename: "ModelStepSequenceConnection",
      items:  Array< {
        __typename: "StepSequence",
        id: string,
        stepNumber?: number | null,
        createdAt: string,
        updatedAt: string,
        workflowStepsId?: string | null,
        stepSequenceStepId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateStepSequenceSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateStepSequenceSubscription = {
  onCreateStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStepSequenceSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateStepSequenceSubscription = {
  onUpdateStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStepSequenceSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteStepSequenceSubscription = {
  onDeleteStepSequence?:  {
    __typename: "StepSequence",
    id: string,
    step?:  {
      __typename: "Step",
      id: string,
      name: string,
      sendEmail: boolean,
      description?: string | null,
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
    stepNumber?: number | null,
    workflow?:  {
      __typename: "Workflow",
      id: string,
      name: string,
      steps?:  {
        __typename: "ModelStepSequenceConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    workflowStepsId?: string | null,
    stepSequenceStepId?: string | null,
    owner?: string | null,
  } | null,
};
