import axios from "axios";
import { Launch, Query } from "./types";

const BASE_URL = "https://api.spacexdata.com";

/** The necessary query options, including what child objects to include. */
const optionsForQuery = () => {
  return {
    options: {
      limit: 9999,
      sort: {
        date_unix: "desc",
      },
      select: {
        name: true,
        details: true,
        flight_number: true,
        upcoming: true,
        date_utc: true,
        date_precision: true,
      },
      populate: [
        {
          path: "payloads",
          select: {
            name: true,
            type: true,
          },
        },
      ],
    },
  };
};

/** Retrieve the list of launches. */
export default async () => {
  const { data } = await axios.post<Query<Launch[]>>(
    `${BASE_URL}/v4/launches/query`,
    optionsForQuery()
  );
  return data;
};
