export interface Launch {
  flight_number: number;
  name: string;
  date_utc: string;
  date_precision: "half" | "quarter" | "year" | "month" | "day" | "hour";
  upcoming: boolean;
  details: string;
  payloads: {
    name: string;
    type: string;
    id: string;
  }[];
  id: string;
}

export interface Query<D> {
  docs: D;
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number;
  nextPage?: number;
}

export interface QueryParams {
  page?: number;
  limit?: number;
}
