import md5 from "md5";
import { getIds, getItems } from "@/api";

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

export const getProductsList = async ({ offset, limit}: { offset: number, limit: number}) => {
  const firstFiftyIds = await getIds({ offset, limit });
  const uniqueIds = getUniqueIds(firstFiftyIds?.result);
  const items = await getItems({ ids: uniqueIds });
  const uniqueItems = getUniqueItems(items?.result);
  return uniqueItems;
};
