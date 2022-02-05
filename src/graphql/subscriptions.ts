/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateStep = /* GraphQL */ `
  subscription OnCreateStep($owner: String) {
    onCreateStep(owner: $owner) {
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
export const onUpdateStep = /* GraphQL */ `
  subscription OnUpdateStep($owner: String) {
    onUpdateStep(owner: $owner) {
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
export const onDeleteStep = /* GraphQL */ `
  subscription OnDeleteStep($owner: String) {
    onDeleteStep(owner: $owner) {
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
export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate($owner: String) {
    onCreateTemplate(owner: $owner) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate($owner: String) {
    onUpdateTemplate(owner: $owner) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate($owner: String) {
    onDeleteTemplate(owner: $owner) {
      id
      name
      template
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow($owner: String) {
    onCreateWorkflow(owner: $owner) {
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
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow($owner: String) {
    onUpdateWorkflow(owner: $owner) {
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
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow($owner: String) {
    onDeleteWorkflow(owner: $owner) {
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
export const onCreateStepSequence = /* GraphQL */ `
  subscription OnCreateStepSequence {
    onCreateStepSequence {
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
export const onUpdateStepSequence = /* GraphQL */ `
  subscription OnUpdateStepSequence {
    onUpdateStepSequence {
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
export const onDeleteStepSequence = /* GraphQL */ `
  subscription OnDeleteStepSequence {
    onDeleteStepSequence {
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
