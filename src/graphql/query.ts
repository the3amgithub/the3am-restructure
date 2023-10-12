import { gql } from "@apollo/client";

export const HomeQuery = gql`
  query Homes {
    homes {
      data {
        id
        attributes {
          artists
          banner {
            data {
              id
              attributes {
                url
              }
            }
          }
          carousel {
            data {
              id
              attributes {
                url
              }
            }
          }
          description {
            data {
              attributes {
                url
              }
              id
            }
          }
          specification {
            data {
              attributes {
                url
              }
              id
            }
          }
        }
      }
    }
  }
`;

export const galleyQuery = gql`
  query Galleries {
    galleries {
      data {
        id
        attributes {
          banner {
            data {
              attributes {
                url
              }
              id
            }
          }
          eventsList {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const contactQuery = gql`
  query Contacts {
    contacts {
      data {
        id
        attributes {
          banner {
            data {
              attributes {
                url
              }
            }
          }
          information
        }
      }
    }
  }
`;
