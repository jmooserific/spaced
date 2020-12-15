import React, { Fragment } from "react";
import useInfiniteFetchLaunches from "../../hooks/launches/useInfiniteFetchLaunches";

export default () => {
  const {
    status,
    data,
    error,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteFetchLaunches();

  const loadMoreButtonRef = React.useRef<HTMLButtonElement>();

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <span>Error: {error.message}</span>;

  /* eslint-disable no-nested-ternary */
  return (
    <div className="Launches prose" data-testid="launches-page">
      <h1>Launches</h1>
      <>
        <ul data-testid="launches-list">
          {data &&
            data.map((query) => (
              <Fragment key={`page${query.page}`}>
                {query.docs.map((launch) => (
                  <li key={`launch${launch.id}`}>{launch.name}</li>
                ))}
              </Fragment>
            ))}
        </ul>
        <div>
          <button
            type="button"
            ref={() => loadMoreButtonRef}
            onClick={() => fetchMore()}
            disabled={!canFetchMore || !!isFetchingMore}
          >
            {isFetchingMore
              ? "Loading more..."
              : canFetchMore
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
      </>
    </div>
  );
};
