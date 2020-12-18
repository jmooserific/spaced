import React, { useCallback } from "react";
import ReactList from "react-list";
import useFetchLaunches from "../../hooks/launches/useFetchLaunches";

export default () => {
  const { status, data, error } = useFetchLaunches();

  const renderItem = useCallback(
    (index, key) => {
      const launch = data && data.docs[index];
      return (
        <li key={key} className="launch h-16">
          {launch?.name}
        </li>
      );
    },
    [data]
  );

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div className="Launches prose" data-testid="launches-page">
      <h1>Launches</h1>
      <>
        <ul data-testid="launches-list">
          <ReactList
            itemRenderer={renderItem}
            length={data?.docs.length}
            type="uniform"
            useStaticSize
          />
        </ul>
      </>
    </div>
  );
};
