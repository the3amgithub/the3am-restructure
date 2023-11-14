import { gql } from "@apollo/client";

export const HomeQuery = gql`
  query Homes {
    homes {
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
          boilerRoom
          createdAt
          description {
            data {
              id
              attributes {
                url
              }
            }
          }
          video
          upcomingEvents
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

export const EventsQuery = gql`
query Events {
  events {
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
        event_details {
          data {
            attributes {
              date
              name
              location
            }
            id
          }
        }
      }
    }
  }
}
`;
export const EventDetailQuery = gql`
query EventDetail($eventDetailId: ID) {
  eventDetail(id: $eventDetailId) {
    data {
      id
      attributes {
        about
        address
        createdAt
        date
        img {
          data {
            attributes {
              url
            }
          }
        }
        name
        location
      }
    }
  }
}
`;
