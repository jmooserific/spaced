import React, { useCallback } from "react";
import ReactList from "react-list";
import useFetchLaunches from "../../hooks/launches/useFetchLaunches";

export default () => {
  const { status, data, error } = useFetchLaunches();

  const renderItem = useCallback(
    (index, key) => {
      const launch = data && data.docs[index];
      return (
        <li
          key={key}
          className="launch w-64 h-full inline-block relative"
          title={launch?.name}
        >
          <div className="absolute h-8 bottom-10 align-text-top">
            {launch?.name}
          </div>
        </li>
      );
    },
    [data]
  );

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div className="Launches" data-testid="launches-page">
      <h1 className="fixed">Launches</h1>
      <ReactList
        itemRenderer={renderItem}
        itemsRenderer={(items, ref) => (
          <ul data-testid="launches-list" ref={ref} className="h-screen">
            {items}
          </ul>
        )}
        length={data?.docs.length}
        type="uniform"
        useStaticSize
        axis="x"
      />
    </div>
  );
};
