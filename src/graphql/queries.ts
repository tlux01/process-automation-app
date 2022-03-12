/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStep = /* GraphQL */ `
  query GetStep($id: ID!) {
    getStep(id: $id) {
      id
      name
      sendEmail
      description
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
export const listSteps = /* GraphQL */ `
  query ListSteps(
    $filter: ModelStepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSteps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sendEmail
        description
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
      nextToken
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        template
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($id: ID!) {
    getWorkflow(id: $id) {
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        steps {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStepSequence = /* GraphQL */ `
  query GetStepSequence($id: ID!) {
    getStepSequence(id: $id) {
      id
      step {
        id
        name
        sendEmail
        description
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
      workflow {
        id
        name
        steps {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      workflowStepsId
      stepSequenceStepId
      owner
    }
  }
`;
export const listStepSequences = /* GraphQL */ `
  query ListStepSequences(
    $filter: ModelStepSequenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStepSequences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        step {
          id
          name
          sendEmail
          description
          createdAt
          updatedAt
          stepTemplateId
          owner
        }
        stepNumber
        workflow {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        workflowStepsId
        stepSequenceStepId
        owner
      }
      nextToken
    }
  }
`;
