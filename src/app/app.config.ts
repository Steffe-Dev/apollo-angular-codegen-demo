import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core'
import { provideRouter, withComponentInputBinding } from '@angular/router'

import { routes } from './app.routes'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideApollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloClientOptions, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core'

const apolloFactory: () => ApolloClientOptions<NormalizedCacheObject> = () => {
  const httpLink = inject(HttpLink)

  return {
    link: httpLink.create({
      uri: 'https://flyby-router-demo.herokuapp.com/',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // ! Tells the cache how to use the data from the all locations query to show a partial detailed view
            location: {
              read: (existing, { args, toReference }) => {
                return toReference({ __typename: 'Location', id: args ? args['id'] : undefined })
              },
            },
          },
        },
      },
    }),
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideApollo(apolloFactory, {
      useInitialLoading: true,
    }),
  ],
}
