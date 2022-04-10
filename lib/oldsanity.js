// import {
//     createClient,
//     createPreviewSubscriptionHook,
//     createPortableTextComponent,
//   } from "next-sanity";

// import createImageUrlBuilder from '@sanity/image-url';

import {createPreviewSubscriptionHook, createCurrentUserHook} from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import {config} from './config';

// const config = {
//     projectId: "42ynkluk",
//     dataset: "production",
//     apiVersion: "2021-03-25",
//     useCdn: true,
// }

// const client = sanityClient({
//     projectId: "42ynkluk",
//     dataset: "production",
//     apiVersion: "2021-03-25",
//     useCdn: true,
//   })

// export const sanityClient = createClient(config);

// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// export const PortableText = createPortableTextComponent({
//   ...config,
//   serializers: {},
// });

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)