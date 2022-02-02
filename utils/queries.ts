import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query {
    articles {
      id
      image
      title
      content
      author {
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: article_id)
        }
      }
    }
  }
`;

export const GET_ARTICLES_BY_PK = gql`
  query ($id: Int!) {
    articles_by_pk(id: $id) {
      id
      image
      title
      content
      author {
        id
        name
      }
      comments_aggregate {
        aggregate {
          count(columns: article_id)
        }
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      password
    }
  }
`;


export const GET_USERS_BY_PK = gql`
  query ($id: Int!) {
    users_by_pk (id: $id) {
      id
      name
      email
      password
    }
  }
`;


export const DELETE_USERS_BY_PK = gql`
  mutation ($id: Int!) {
    delete_users_by_pk (id: $id) {
      name
    }
  }
`;

export const POST_USERS_BY_PK = gql`
  mutation ($id: Int!) {
    users_by_pk (id: $id) {
      id
    }
  }
`;

export const POST_ARTICLES = gql`
  mutation ($image: String!, $title: String!, $content: String!, $name: String!) {
    insert_articles_one (object: {
      image: $image,
      title: $title,
      content: $content
      author: {
        name: $name
      }
    })
      {
        id
      }
  }
`;
