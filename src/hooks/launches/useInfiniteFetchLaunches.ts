import { useInfiniteQuery } from "react-query";
import launchesQuery from "../../api/spaceX/launchesQuery";
import { Launch, Query } from "../../api/spaceX/types";

export default () => {
  return useInfiniteQuery<Query<Launch[]>, Error>("launches", launchesQuery, {
    getFetchMore: (lastPage) => lastPage.nextPage,
  });
};
