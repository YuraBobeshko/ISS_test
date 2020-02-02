import gql from 'graphql-tag';

export const listCommentQuery = gql`
  query listComment {
    listComment {
      nameAuthor
      title
      id
      like
    }
  }
`;