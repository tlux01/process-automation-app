/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createStep = /* GraphQL */ `
  mutation CreateStep(
    $input: CreateStepInput!
    $condition: ModelStepConditionInput
  ) {
    createStep(input: $input, condition: $condition) {
      id
      name
      sendEmail
      template {
        id
        name
        template
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      stepTemplateId
      owner
    }
  }
`;
export const updateStep = /* GraphQL */ `
  mutation UpdateStep(
    $input: UpdateStepInput!
    $condition: ModelStepConditionInput
  ) {
    updateStep(input: $input, condition: $condition) {
      id
      name
      sendEmail
      template {
        id
        name
        template
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      stepTemplateId
      owner
    }
  }
`;
export const deleteStep = /* GraphQL */ `
  mutation DeleteStep(
    $input: DeleteStepInput!
    $condition: ModelStepConditionInput
  ) {
    deleteStep(input: $input, condition: $condition) {
      id
      name
      sendEmail
      template {
        id
        name
        template
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      stepTemplateId
      owner
    }
  }
`;
export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
      id
      name
      steps {
        items {
          id
          stepNumber
          createdAt
          updatedAt
          workflowStepsId
          stepSequenceStepId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
      id
      name
      steps {
        items {
          id
          stepNumber
          createdAt
          updatedAt
          workflowStepsId
          stepSequenceStepId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
      id
      name
      steps {
        items {
          id
          stepNumber
          createdAt
          updatedAt
          workflowStepsId
          stepSequenceStepId
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createStepSequence = /* GraphQL */ `
  mutation CreateStepSequence(
    $input: CreateStepSequenceInput!
    $condition: ModelStepSequenceConditionInput
  ) {
    createStepSequence(input: $input, condition: $condition) {
      id
      step {
        id
        name
        sendEmail
        template {
          id
          name
          template
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        stepTemplateId
        owner
      }
      stepNumber
      createdAt
      updatedAt
      workflowStepsId
      stepSequenceStepId
    }
  }
`;
export const updateStepSequence = /* GraphQL */ `
  mutation UpdateStepSequence(
    $input: UpdateStepSequenceInput!
    $condition: ModelStepSequenceConditionInput
  ) {
    updateStepSequence(input: $input, condition: $condition) {
      id
      step {
        id
        name
        sendEmail
        template {
          id
          name
          template
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        stepTemplateId
        owner
      }
      stepNumber
      createdAt
      updatedAt
      workflowStepsId
      stepSequenceStepId
    }
  }
`;
export const deleteStepSequence = /* GraphQL */ `
  mutation DeleteStepSequence(
    $input: DeleteStepSequenceInput!
    $condition: ModelStepSequenceConditionInput
  ) {
    deleteStepSequence(input: $input, condition: $condition) {
      id
      step {
        id
        name
        sendEmail
        template {
          id
          name
          template
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        stepTemplateId
        owner
      }
      stepNumber
      createdAt
      updatedAt
      workflowStepsId
      stepSequenceStepId
    }
  }
`;
