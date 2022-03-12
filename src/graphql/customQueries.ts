export const customListWorkflows = /* GraphQL */ `
  query CustomListWorkflows(
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        name
        owner
        updatedAt
        steps {
          items {
            createdAt
            id
            owner
            stepNumber
            stepSequenceStepId
            updatedAt
            workflowStepsId
            step {
              createdAt
              id
              name
              owner
              sendEmail
              stepTemplateId
              template {
                createdAt
                id
                name
                owner
                template
              }
            }
          }
        }
      }
    }
  }
`;
