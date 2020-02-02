import gql from 'graphql-tag';

export const changeLikeMutation = gql`
  mutation changeLike($id: ID!) { 
    changeLike(id: $id){
      id
    }
  }
`;