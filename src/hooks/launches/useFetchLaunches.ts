import { useQuery } from "react-query";
import launchesQuery from "../../api/spaceX/launchesQuery";
import { Launch, Query } from "../../api/spaceX/types";

export default () => {
  return useQuery<Query<Launch[]>, Error>("launches", launchesQuery, {
    cacheTime: 600,
    staleTime: 300,
  });
};
