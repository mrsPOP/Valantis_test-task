import { filter, getFields, getIds, getItems } from "@/api";
import md5 from "md5";

const getCurrentDateInYYYYMMDDFormat = () => {
  const currentDate = new Date();

  const year = currentDate.getUTCFullYear();

  let month: number | string = currentDate.getUTCMonth() + 1;
  month = month < 10 ? "0" + month : month;

  let day: number | string = currentDate.getUTCDate();
  day = day < 10 ? "0" + day : day;
  return `${year}${month}${day}`;
};

export const generateXAuth = () =>
  md5("Valantis_" + getCurrentDateInYYYYMMDDFormat());

const getUniqueIds = (ids: string[]) => Array.from(new Set(ids));

const getUniqueItems = (items: Products) => {
  const uniqueIds = new Set();
  const uniqueItems: Products = [];

  items.forEach((item) => {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      uniqueItems.push(item);
    }
  });

  return uniqueItems;
};

const getUniqueProductList = async (ids: string[]) => {
  const uniqueIds = getUniqueIds(ids);
  const items = await getItems({ ids: uniqueIds });
  const uniqueItems = getUniqueItems(items?.result);
  return uniqueItems;
};

export const getProductsList = async ({
  offset,
  limit,
  ids,
}: {
  offset?: number;
  limit?: number;
  ids?: string[];
}) => {
  if (ids) {
    return await getUniqueProductList(ids);
  }
  const firstFiftyIds = await getIds({ offset, limit });
  return await getUniqueProductList(firstFiftyIds?.result);
};

export const getDataForFiltersSelects = async () => {
  let { result: brand } = await getFields({ field: "brand" });
  let { result: product } = await getFields({ field: "product" });
  let { result: price } = await getFields({ field: "price" });

  brand = new Set(brand);
  brand.delete(null);
  product = new Set(product);
  price = new Set(price);
  // @ts-expect-error
  price = new Set(Array.from(price).sort((a, b) => a - b));
  return { brand, product, price };
};

export const getFilteredProductsIds = async (filters: Filter) => {
  const filtered = await filter(filters);
  return filtered?.result;
};
