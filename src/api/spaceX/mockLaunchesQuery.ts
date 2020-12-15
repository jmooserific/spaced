// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from "axios-mock-adapter";
import { Launch, Query } from "./types";

const generateRecord = (index: number): Launch => {
  return {
    fairings: undefined,
    links: {
      patch: {
        small: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
        large: "https://images2.imgbox.com/15/2b/NAcsTEB6_o.png",
      },
      reddit: {
        campaign:
          "https://www.reddit.com/r/spacex/comments/ezn6n0/crs20_launch_campaign_thread",
        launch:
          "https://www.reddit.com/r/spacex/comments/fe8pcj/rspacex_crs20_official_launch_discussion_updates/",
        media:
          "https://www.reddit.com/r/spacex/comments/fes64p/rspacex_crs20_media_thread_videos_images_gifs/",
        recovery: undefined,
      },
      flickr: {
        small: [],
        original: [
          "https://live.staticflickr.com/65535/49635401403_96f9c322dc_o.jpg",
          "https://live.staticflickr.com/65535/49636202657_e81210a3ca_o.jpg",
          "https://live.staticflickr.com/65535/49636202572_8831c5a917_o.jpg",
          "https://live.staticflickr.com/65535/49635401423_e0bef3e82f_o.jpg",
          "https://live.staticflickr.com/65535/49635985086_660be7062f_o.jpg",
        ],
      },
      presskit:
        "https://www.spacex.com/sites/spacex/files/crs-20_mission_press_kit.pdf",
      webcast: "https://youtu.be/1MkcWK2PnsU",
      youtube_id: "1MkcWK2PnsU",
      article:
        "https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/",
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-20",
    },
    static_fire_date_utc: "2020-03-01T10:20:00.000Z",
    static_fire_date_unix: 1583058000,
    tdb: false,
    net: false,
    window: 0,
    rocket: "5e9d0d95eda69973a809d1ec",
    success: true,
    failures: [],
    details:
      "SpaceX's 20th and final Crew Resupply Mission under the original NASA CRS contract, this mission brings essential supplies to the International Space Station using SpaceX's reusable Dragon spacecraft. It is the last scheduled flight of a Dragon 1 capsule. (CRS-21 and up under the new Commercial Resupply Services 2 contract will use Dragon 2.) The external payload for this mission is the Bartolomeo ISS external payload hosting platform. Falcon 9 and Dragon will launch from SLC-40, Cape Canaveral Air Force Station and the booster will land at LZ-1. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    crew: [],
    ships: [],
    capsules: ["5e9e2c5cf359185d753b266f"],
    payloads: ["5eb0e4d0b6c3bb0006eeb253"],
    launchpad: "5e9e4501f509094ba4566f84",
    auto_update: true,
    flight_number: 91,
    name: `CRS-${index}`,
    date_utc: "2020-03-07T04:50:31.000Z",
    date_unix: 1583556631,
    date_local: "2020-03-06T23:50:31-05:00",
    date_precision: "hour",
    upcoming: false,
    cores: [
      {
        core: {
          block: 5,
          reuse_count: 0,
          rtls_attempts: 0,
          rtls_landings: 0,
          asds_attempts: 1,
          asds_landings: 1,
          last_update:
            "At SLC-40 Prep facility after launch abort T-2s on Oct 3, 2020",
          launches: ["5eb87d4cffd86e000604b38d"],
          serial: "B1062",
          status: "unknown",
          id: "5f57c5440622a633027900a0",
        },
        flight: 2,
        gridfins: true,
        legs: true,
        reused: true,
        landing_attempt: true,
        landing_success: true,
        landing_type: "RTLS",
        landpad: "5e9e3032383ecb267a34e7c7",
      },
    ],
    id: index.toString(),
  };
};

const generateRecords = (count: number): Launch[] => {
  return [...Array(count)].map((_value, index) => generateRecord(index));
};

const urlToMock = new RegExp(`/v4/launches/query`);

export const mockLaunchesQuerySuccess = (mock: MockAdapter, count = 15) => {
  mock.onPost(urlToMock).reply(({ data }) => {
    const { options } = JSON.parse(data);
    const page: number = options?.page;
    const limit: number = options?.limit || 10;
    const offset = (page - 1) * limit;
    const docs = generateRecords(count).slice(offset, offset + limit);
    const totalPages = Math.ceil(count / limit);

    const response: Query<Launch[]> = {
      docs,
      totalDocs: count,
      offset,
      limit,
      totalPages,
      page: page + 1,
      pagingCounter: page + 1,
      hasPrevPage: page !== 1,
      hasNextPage: page !== totalPages,
      prevPage: page === 1 ? undefined : page,
      nextPage: page === totalPages ? undefined : page + 1,
    };
    return [200, response];
  });
};

export const mockLaunchesQueryFailure = (mock: MockAdapter) => {
  mock.onPost(urlToMock).networkError();
};
