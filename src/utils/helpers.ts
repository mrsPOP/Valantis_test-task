import md5 from "md5";
import { getIds, getItems } from "@/api";

const getCurrentDateInYYYYMMDDFormat = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();

  let month: number | string = currentDate.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  let day: number | string = currentDate.getDate();
  day = day < 10 ? "0" + day : day;

  return `${year}${month}${day}`;
};

export const generateXAuth = () => md5(getCurrentDateInYYYYMMDDFormat());

const getUniqueIds = (ids: string[]) => Array.from(new Set(ids));

export const getFirstRenderProductsList = async () => {
  const firstFiftyIds = await getIds({ offset: 0, limit: 50 });
  const unicIds = getUniqueIds(firstFiftyIds.result);
  const {result} = await getItems({ids: unicIds});
  return result;
};

