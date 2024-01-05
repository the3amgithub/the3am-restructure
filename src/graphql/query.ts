import { gql } from "@apollo/client";

export const HomeQuery = gql`
query Homes {
  homes {
    data {
      id
      attributes {
        banner
        boilerRoom
        createdAt
        description
        video
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
        banner
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
        banner
        event_details {
          data {
            attributes {
              name
              location
              date
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
        img
        date
        name
        location
        tableImg
        bookingLink
      }
    }
  }
}
`;
