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
