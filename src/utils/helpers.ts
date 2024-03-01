import md5 from "md5";
import { getIds, getItems, getFields } from "@/api";

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

export const getProductsList = async ({
  offset,
  limit,
}: {
  offset: number;
  limit: number;
}) => {
  const firstFiftyIds = await getIds({ offset, limit });
  const uniqueIds = getUniqueIds(firstFiftyIds?.result);
  const items = await getItems({ ids: uniqueIds });
  const uniqueItems = getUniqueItems(items?.result);
  return uniqueItems;
};

export const getDataForFiltersSelects = async () => {
  let { result: brand } = await getFields({ field: "brand" });
  let { result: product } = await getFields({ field: "product" });
  let { result: price } = await getFields({ field: "price" });

  brand = new Set(brand);
  brand.delete(null);
  product = new Set(product);
  price = new Set(price);

  return { brand, product, price };
};
