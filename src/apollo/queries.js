import gql from 'graphql-tag'

export const GLOBAL_QUERY = gql`
  {
    globalStats {
      id
      users
    }
  }
`
