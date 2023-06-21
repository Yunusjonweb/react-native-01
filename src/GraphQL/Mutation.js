const {gql} = require('@apollo/client');

export const ADD_TODO = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

export const GET_POSTS = gql`
  query posts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          name
          id
        }
      }
      links {
        prev {
          page
        }
        next {
          page
        }
      }
      meta {
        totalCount
      }
    }
  }
`;
