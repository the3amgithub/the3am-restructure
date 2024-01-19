import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type BookingInputType = {
  eventId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  ticketId: Scalars['ID']['input'];
};

export type BookingType = {
  __typename?: 'BookingType';
  _id: Scalars['ID']['output'];
  event: EventType;
  quantity: Scalars['Int']['output'];
  ticket: TicketType;
  totalPrice: Scalars['Int']['output'];
  user: User;
};

export type Contact = {
  __typename?: 'Contact';
  _id: Scalars['ID']['output'];
  bookingQuery?: Maybe<ContactInfoType>;
  conversation?: Maybe<ContactInfoType>;
  moreInfo?: Maybe<ContactInfoType>;
};

export type ContactInfoInputType = {
  email?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type ContactInfoType = {
  __typename?: 'ContactInfoType';
  email?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  label?: Maybe<Scalars['String']['output']>;
};

export type ContactInput = {
  bookingQuery?: InputMaybe<ContactInfoInputType>;
  conversation?: InputMaybe<ContactInfoInputType>;
  moreInfo?: InputMaybe<ContactInfoInputType>;
};

export type EditEventInput = {
  _id: Scalars['ID']['input'];
  banner?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tableLayout?: InputMaybe<Scalars['String']['input']>;
  tickets?: InputMaybe<Array<InputMaybe<EditTicketInput>>>;
};

export type EditTicketInput = {
  _id: Scalars['ID']['input'];
  category?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type EventInput = {
  banner: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tableLayout: Scalars['String']['input'];
  tickets?: InputMaybe<Array<InputMaybe<EventTicketInput>>>;
};

export type EventPayload = {
  __typename?: 'EventPayload';
  error?: Maybe<ErrorType>;
  event?: Maybe<EventType>;
};

export type EventTicketInput = {
  category: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type EventType = {
  __typename?: 'EventType';
  _id: Scalars['ID']['output'];
  banner: Scalars['String']['output'];
  date: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tableLayout: Scalars['String']['output'];
  tickets: Array<Maybe<TicketType>>;
};

export type EventsList = {
  __typename?: 'EventsList';
  pastEvents?: Maybe<Array<Maybe<EventType>>>;
  upcomingEvents?: Maybe<Array<Maybe<EventType>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authBasic: UserPayload;
  createBooking?: Maybe<Array<Maybe<BookingType>>>;
  createContact?: Maybe<Contact>;
  createEvent: EventPayload;
  editEVent: EventPayload;
  registerUser: UserPayload;
  verifyUser: UserPayload;
};


export type MutationAuthBasicArgs = {
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateBookingArgs = {
  input: Array<InputMaybe<BookingInputType>>;
};


export type MutationCreateContactArgs = {
  input?: InputMaybe<ContactInput>;
};


export type MutationCreateEventArgs = {
  input: EventInput;
};


export type MutationEditEVentArgs = {
  input?: InputMaybe<EditEventInput>;
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignupInput>;
};


export type MutationVerifyUserArgs = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  otp?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getBookings?: Maybe<Array<Maybe<BookingType>>>;
  getContacts?: Maybe<Contact>;
  getEvent?: Maybe<EventType>;
  getEvents?: Maybe<EventsList>;
  me?: Maybe<Scalars['String']['output']>;
};


export type QueryGetEventArgs = {
  id: Scalars['ID']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type TicketType = {
  __typename?: 'TicketType';
  _id: Scalars['ID']['output'];
  availableTickets: Scalars['Int']['output'];
  category: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetContactsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactsQuery = { __typename?: 'Query', getContacts?: { __typename?: 'Contact', _id: string, moreInfo?: { __typename?: 'ContactInfoType', label?: string | null, email?: Array<string | null> | null } | null, bookingQuery?: { __typename?: 'ContactInfoType', label?: string | null, email?: Array<string | null> | null } | null, conversation?: { __typename?: 'ContactInfoType', label?: string | null, email?: Array<string | null> | null } | null } | null };

export type GetEventQueryVariables = Exact<{
  getEventId: Scalars['ID']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', getEvent?: { __typename?: 'EventType', _id: string, name: string, location: string, date: any, description: string, banner: string, tableLayout: string, tickets: Array<{ __typename?: 'TicketType', _id: string, category: string, price: number, quantity: number } | null> } | null };

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', getEvents?: { __typename?: 'EventsList', pastEvents?: Array<{ __typename?: 'EventType', _id: string, name: string, location: string, date: any, description: string, banner: string, tableLayout: string } | null> | null, upcomingEvents?: Array<{ __typename?: 'EventType', _id: string, name: string, location: string, date: any, description: string, banner: string, tableLayout: string } | null> | null } | null };


export const GetContactsDocument = gql`
    query GetContacts {
  getContacts {
    _id
    moreInfo {
      label
      email
    }
    bookingQuery {
      label
      email
    }
    conversation {
      label
      email
    }
  }
}
    `;

/**
 * __useGetContactsQuery__
 *
 * To run a query within a React component, call `useGetContactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContactsQuery(baseOptions?: Apollo.QueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
      }
export function useGetContactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
        }
export function useGetContactsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetContactsQuery, GetContactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContactsQuery, GetContactsQueryVariables>(GetContactsDocument, options);
        }
export type GetContactsQueryHookResult = ReturnType<typeof useGetContactsQuery>;
export type GetContactsLazyQueryHookResult = ReturnType<typeof useGetContactsLazyQuery>;
export type GetContactsSuspenseQueryHookResult = ReturnType<typeof useGetContactsSuspenseQuery>;
export type GetContactsQueryResult = Apollo.QueryResult<GetContactsQuery, GetContactsQueryVariables>;
export const GetEventDocument = gql`
    query GetEvent($getEventId: ID!) {
  getEvent(id: $getEventId) {
    _id
    name
    location
    date
    description
    banner
    tableLayout
    tickets {
      _id
      category
      price
      quantity
    }
  }
}
    `;

/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      getEventId: // value for 'getEventId'
 *   },
 * });
 */
export function useGetEventQuery(baseOptions: Apollo.QueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
      }
export function useGetEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export function useGetEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventQuery, GetEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventQuery, GetEventQueryVariables>(GetEventDocument, options);
        }
export type GetEventQueryHookResult = ReturnType<typeof useGetEventQuery>;
export type GetEventLazyQueryHookResult = ReturnType<typeof useGetEventLazyQuery>;
export type GetEventSuspenseQueryHookResult = ReturnType<typeof useGetEventSuspenseQuery>;
export type GetEventQueryResult = Apollo.QueryResult<GetEventQuery, GetEventQueryVariables>;
export const GetEventsDocument = gql`
    query GetEvents {
  getEvents {
    pastEvents {
      _id
      name
      location
      date
      description
      banner
      tableLayout
    }
    upcomingEvents {
      _id
      name
      location
      date
      description
      banner
      tableLayout
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export function useGetEventsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsSuspenseQueryHookResult = ReturnType<typeof useGetEventsSuspenseQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;