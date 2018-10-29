import gql from 'graphql-tag';
import { staffingFragment } from './commonFragments';

// eslint-disable-next-line import/prefer-default-export
export const ADD_STAFFING = gql`
  ${staffingFragment}

  mutation AddStaffing($staffing: AddStaffingInput!) {
    addStaffing(staffing: $staffing) {
      ...staffingFields
      projectId
    }
  }
`;

export const EDIT_STAFFING = gql`
  ${staffingFragment}

  mutation EditStaffing($staffing: EditStaffingInput!) {
    editStaffing(staffing: $staffing) {
      ...staffingFields
      projectId
    }
  }
`;
