import gql from 'graphql-tag';

import { projectFragment, estimationFragment, staffingFragment } from './commonFragments';

export const GET_USERS = gql`
  query GetUsers($job: String, $search: String) {
    allUsers(job: $job, search: $search) {
      _id
      firstName
      lastName
    }
  }
`;

export const GET_PROJECT_STAFFING = gql`
  ${staffingFragment}

  query GetStaffing($projectId: ObjectId!) {
    allStaffings(projectId: $projectId) {
      ...staffingFields
    }
  }
`;

export const GET_PROJECT = gql`
  ${projectFragment}
  ${estimationFragment}

  query GetProject($slug: String!) {
    project(slug: $slug) {
      ...projectFields
      projectManagerId
      projectManager {
        firstName
        lastName
      }
      clientId
      client {
        _id
        name
      }
      estimations {
        ...estimationFields
      }
    }
  }
`;
