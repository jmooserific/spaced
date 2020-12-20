// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from "axios-mock-adapter";
import { Launch, Query } from "./types";

const generateRecord = (index: number): Launch => {
  return {
    details:
      "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    payloads: [
      {
        name: "CRS-21",
        type: index % 2 === 0 ? "Dragon 2.0" : "Satellite",
        id: "5eb0e4d3b6c3bb0006eeb262",
      },
    ],
    flight_number: 110,
    name: "CRS-21",
    date_utc: "2020-12-06T16:17:00.000Z",
    date_precision: "hour",
    upcoming: false,
    id: index.toString(),
  };
};

const generateRecords = (count: number): Launch[] => {
  return [...Array(count)].map((_value, index) => generateRecord(index));
};

const urlToMock = new RegExp(`/v4/launches/query`);

export const mockLaunchesQuerySuccess = (mock: MockAdapter, count = 30) => {
  mock.onPost(urlToMock).reply(({ data }) => {
    const { options } = JSON.parse(data);
    const limit: number = options?.limit;
    const docs = generateRecords(count);
    const totalPages = Math.ceil(count / limit);

    const response: Query<Launch[]> = {
      docs,
      totalDocs: count,
      offset: 0,
      limit,
      totalPages,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: undefined,
      nextPage: undefined,
    };
    return [200, response];
  });
};

export const mockLaunchesQueryFailure = (mock: MockAdapter) => {
  mock.onPost(urlToMock).networkError();
};
