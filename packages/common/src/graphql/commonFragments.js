import gql from 'graphql-tag';

export const projectFragment = gql`
  fragment projectFields on Project {
    _id
    name
    type
    slug
    startDate
    endDate
    estimatedPrice
    totalPrice
    comment
  }
`;

export const estimationFragment = gql`
  fragment estimationFields on Estimation {
    skill
    level
    numberOfDays
    dailyFee
    totalPrice
  }
`;

export const staffingFragment = gql`
  fragment staffingFields on Staffing {
    _id
    startDate
    endDate
    dailyFee
    occupancyRate
    comment
    skill
    user {
      _id
      firstName
      lastName
    }
  }
`;
