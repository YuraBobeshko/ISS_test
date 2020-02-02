import gql from 'graphql-tag';

export const addCommentMutation = gql`
  mutation addComment($nameAuthor: String!, $title: String!) { 
    addComment(nameAuthor: $nameAuthor, title: $title){
      title
    }
  }
`;