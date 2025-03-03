import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Location = {
  __typename?: 'Location';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  overallRating?: Maybe<Scalars['Float']['output']>;
  photo: Scalars['String']['output'];
  reviewsForLocation: Array<Maybe<Review>>;
};

export type LocationReviewInput = {
  comment: Scalars['String']['input'];
  locationId: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  submitReview?: Maybe<SubmitReviewResponse>;
};


export type MutationSubmitReviewArgs = {
  locationReview?: InputMaybe<LocationReviewInput>;
};

export type Query = {
  __typename?: 'Query';
  latestReviews: Array<Review>;
  location?: Maybe<Location>;
  locations: Array<Location>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  rating?: Maybe<Scalars['Int']['output']>;
};

export type SubmitReviewResponse = {
  __typename?: 'SubmitReviewResponse';
  code: Scalars['Int']['output'];
  locationReview?: Maybe<Review>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type LocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: string, name: string, photo: string }> };

export type LocationPlaceholderFragment = { __typename?: 'Location', id: string, name: string, photo: string };

export type SubmitReviewMutationVariables = Exact<{
  input: LocationReviewInput;
}>;


export type SubmitReviewMutation = { __typename?: 'Mutation', submitReview?: { __typename?: 'SubmitReviewResponse', code: number, success: boolean, message: string, locationReview?: { __typename?: 'Review', id: string, comment?: string | null, rating?: number | null, location?: { __typename?: 'Location', id: string } | null } | null } | null };

export type LocationDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LocationDetailsQuery = { __typename?: 'Query', location?: { __typename?: 'Location', description: string, overallRating?: number | null, id: string, name: string, photo: string } | null };

export type LocationPlaceholderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LocationPlaceholderQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: string, name: string, photo: string } | null };

export type LocationReviewsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LocationReviewsQuery = { __typename?: 'Query', location?: { __typename?: 'Location', id: string, reviewsForLocation: Array<{ __typename?: 'Review', id: string, comment?: string | null, rating?: number | null } | null> } | null };

export type LatestReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestReviewsQuery = { __typename?: 'Query', latestReviews: Array<{ __typename?: 'Review', id: string, comment?: string | null, rating?: number | null, location?: { __typename?: 'Location', id: string, name: string } | null }> };

export const LocationPlaceholderFragmentDoc = gql`
    fragment LocationPlaceholder on Location {
  id
  name
  photo
}
    `;
export const LocationsDocument = gql`
    query Locations {
  locations {
    ...LocationPlaceholder
  }
}
    ${LocationPlaceholderFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LocationsGQL extends Apollo.Query<LocationsQuery, LocationsQueryVariables> {
    document = LocationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitReviewDocument = gql`
    mutation SubmitReview($input: LocationReviewInput!) {
  submitReview(locationReview: $input) {
    code
    success
    message
    locationReview {
      id
      comment
      rating
      location {
        id
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitReviewGQL extends Apollo.Mutation<SubmitReviewMutation, SubmitReviewMutationVariables> {
    document = SubmitReviewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LocationDetailsDocument = gql`
    query LocationDetails($id: ID!) {
  location(id: $id) {
    ...LocationPlaceholder
    description
    overallRating
  }
}
    ${LocationPlaceholderFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LocationDetailsGQL extends Apollo.Query<LocationDetailsQuery, LocationDetailsQueryVariables> {
    document = LocationDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LocationPlaceholderDocument = gql`
    query LocationPlaceholder($id: ID!) {
  location(id: $id) {
    ...LocationPlaceholder
  }
}
    ${LocationPlaceholderFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LocationPlaceholderGQL extends Apollo.Query<LocationPlaceholderQuery, LocationPlaceholderQueryVariables> {
    document = LocationPlaceholderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LocationReviewsDocument = gql`
    query LocationReviews($id: ID!) {
  location(id: $id) {
    id
    reviewsForLocation {
      id
      comment
      rating
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LocationReviewsGQL extends Apollo.Query<LocationReviewsQuery, LocationReviewsQueryVariables> {
    document = LocationReviewsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LatestReviewsDocument = gql`
    query LatestReviews {
  latestReviews {
    id
    comment
    rating
    location {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LatestReviewsGQL extends Apollo.Query<LatestReviewsQuery, LatestReviewsQueryVariables> {
    document = LatestReviewsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }