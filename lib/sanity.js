import {
    createClient,
    createPreviewSubscriptionHook,
  } from "next-sanity";

// import myConfiguredSanityClient from './sanityClient';
import imageUrlBuilder from '@sanity/image-url';
// const builder = imageUrlBuilder(myConfiguredSanityClient);


import { PortableText as PortableTextComponent } from '@portabletext/react';

const config = {
  projectId: "42ynkluk",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
};
  
export const sanityClient = createClient(config);
  
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
  
export const urlFor = (source) => imageUrlBuilder(config).image(source);
  
export const PortableText = (props) => <PortableTextComponent components={{}} {...props} />