import axios from "axios";
import { Launch, Query } from "./types";

const BASE_URL = "https://api.spacexdata.com";

/** The necessary query options, including sorting, pagination, and what child objects to include. */
const optionsForQuery = (page: number) => {
  return {
    options: {
      page,
      sort: { date_unix: "desc" },
      populate: {
        path: "cores",
        populate: [
          {
            path: "core",
          },
        ],
      },
    },
  };
};

/** Retrieve a paginated list of launches. */
export default async (_key: string, page = 1) => {
  const { data } = await axios.post<Query<Launch[]>>(
    `${BASE_URL}/v4/launches/query`,
    optionsForQuery(page)
  );
  return data;
};
