import 'server-only'

import logger from "@/lib/logger";

import { Product, Location } from "./types";

interface FetcherProps<T> {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
  headers?: HeadersInit;
  fallback: T;
}

const fetcher = async <T>({
  url,
  method,
  body,
  headers = {},
  fallback,
}: FetcherProps<T>): Promise<T> => {
  const reqHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headers,
  };

  let res;

  try {
    res = await fetch(url, {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: reqHeaders,
    });

    if (res?.status >= 400) {
      const { error } = await res.json();
      logger.error("API error", error);
      return fallback;
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    logger.error("Fetch error", error);
    return fallback;
  }
};

/**
 * Fetches data from the CMS API.
 *
 * @param {FetcherProps<T>} props - The properties for the fetcher.
 * @return {Promise<T>} A promise that resolves to the fetched data.
 */
const cmsFetcher = async <T>(props: FetcherProps<T>) => {
  const url = `${process.env.CMS_URL}/${props.url}`;

  return fetcher({
    ...props,
    url,
    headers: {
      Authorization: process.env.CMS_AUTH_TOKEN || "",
    },
  });
};

/**
 * Retrieves a list of products from the CMS.
 *
 * @return {Promise<Product[]>} A promise that resolves to an array of products.
 */
export const getProducts = async () => {
  return cmsFetcher<Product[]>({
    url: "api/products?populate=mainImage",
    method: "GET",
    fallback: []
  });
};

/**
 * Retrieves a list of locations from the CMS API.
 *
 * @return {Promise<Location[]>} A promise that resolves to an array of Location objects.
 */
export const getLocations = async () => {
  return cmsFetcher<Location[]>({
    url: "api/locations?populate=products",
    method: "GET",
    fallback: []
  });
};
