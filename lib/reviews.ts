import { marked } from "marked";
import qs from "qs";

const CMS_URL = "http://localhost:1337";

interface CmsItem {
  id: number;
  attributes: any;
}
export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: any;
}

export interface FullReview extends Review {
  body: any;
}

export default async function getReview(slug: string): Promise<FullReview> {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
}

export async function getReviews(): Promise<Review[]> {
  const { data } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 6 },
  });
  return data.map(toReview);
}

export async function getSlugs(): Promise<string[]> {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map((item: CmsItem) => item.attributes.slug);
}

export async function getLatestReviews(): Promise<Review> {
  const reviews = await getReviews();
  return reviews[0];
}

async function fetchReviews(parameter) {
  const url =
    `${CMS_URL}/api/reviews` +
    "?" +
    qs.stringify(
      parameter,
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(`CMS return ${response.status} for ${url}`);
  }
  return await response.json();
}

function toReview(item) {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
}