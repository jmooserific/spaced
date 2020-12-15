import React from "react";
import { render } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import App from "./App";
import { mockLaunchesQuerySuccess } from "./api/spaceX/mockLaunchesQuery";

test("renders App", () => {
  const mock = new MockAdapter(axios);
  mockLaunchesQuerySuccess(mock);

  const { getByText } = render(<App />);
  const loading = getByText(/Loading/i);
  expect(loading).toBeInTheDocument();
});
