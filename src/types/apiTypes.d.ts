type Field = "brand" | "price" | "product";
type Action = "get_ids" | "get_items" | "get_fields" | "filter";
type Params = GetFieldsProps | GetItemsProps | GetIdsProps;

type GetFieldsProps = {
  field?: Field;
  offset?: number;
  limit?: number;
};

type GetItemsProps = {
  ids?: string[];
};

type GetIdsProps = {
  offset?: number;
  limit?: number;
};

type FilterProps = {
  [field: Field]: number | string;
};

type FetchDataProps = {
  action: Action;
  params: Params;
};
