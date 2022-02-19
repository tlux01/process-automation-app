export const customListWorkflows = /* GraphQL */ `
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
          items {
            id
            createdAt
            owner
            stepNumber
            stepSequenceStepId
            updatedAt
          }
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
