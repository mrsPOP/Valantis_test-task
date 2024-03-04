import { BASE_URL } from "./config";
import { generateXAuth } from "@/utils/helpers";

const fetchData = async (config: object, retries = 5): Promise<any> => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": generateXAuth(),
      },
      body: JSON.stringify(config),
    });

    if (response.ok) {
      return await response.json();
    }

    if (retries > 0) {
      return fetchData(config, retries - 1);
    }
    
    throw new Error(`HTTP error! Status: ${response.status}`);
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return null;
  }
};

export const getIds = async ({ offset, limit }: GetIdsProps) => {
  const config = {
    action: "get_ids",
    params: { offset, limit },
  };

  return await fetchData(config);
};

export const getItems = async ({ ids }: GetItemsProps) => {
  const config = {
    action: "get_items",
    params: { ids },
  };

  return await fetchData(config);
};

export const getFields = async ({ field, offset, limit }: GetFieldsProps) => {
  const config = {
    action: "get_fields",
    params: { field, offset, limit },
  };

  return await fetchData(config);
};

export const filter = async (filter: FilterProps) => {
  const config = {
    action: "filter",
    params: filter,
  };

  return await fetchData(config);
};
