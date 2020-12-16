import React, { Fragment } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useInfiniteFetchLaunches from "../../hooks/launches/useInfiniteFetchLaunches";

export default () => {
  const {
    status,
    data,
    error,
    isFetching,
    fetchMore,
    canFetchMore,
  } = useInfiniteFetchLaunches();

  const infiniteRef = useInfiniteScroll<HTMLUListElement>({
    loading: isFetching,
    hasNextPage: !!canFetchMore,
    onLoadMore: fetchMore,
  });

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div className="Launches prose" data-testid="launches-page">
      <h1>Launches</h1>
      <>
        <ul ref={infiniteRef} data-testid="launches-list">
          {data &&
            data.map((query) => (
              <Fragment key={`page${query.page}`}>
                {query.docs.map((launch) => (
                  <li key={`launch${launch.id}`} className="h-8">
                    {launch.name}
                  </li>
                ))}
              </Fragment>
            ))}
        </ul>
      </>
    </div>
  );
};
