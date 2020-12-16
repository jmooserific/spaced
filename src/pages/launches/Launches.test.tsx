import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { queryCache } from "react-query";
import {
  mockLaunchesQueryFailure,
  mockLaunchesQuerySuccess,
} from "../../api/spaceX/mockLaunchesQuery";
import Launches from "./Launches";

afterEach(() => {
  queryCache.clear();
});

describe("<Launches />", () => {
  describe("with a successful API call", () => {
    it("renders a list of launches and lets me load more", async () => {
      const mock = new MockAdapter(axios);
      mockLaunchesQuerySuccess(mock);

      render(<Launches />);

      await waitFor(() => {
        expect(screen.getByText("Launches")).toBeInTheDocument();
      });

      expect(screen.getByTestId("launches-list").childElementCount).toBe(20);

      await fireEvent.scroll(window, { target: { scrollY: 800 } });

      await waitFor(() => {
        expect(screen.getByTestId("launches-list").childElementCount).toBe(30);
      });
    });
  });

  describe("with an unsuccessful API call", () => {
    it("renders an error", async () => {
      jest.useFakeTimers();
      const mock = new MockAdapter(axios);
      mockLaunchesQueryFailure(mock);

      render(<Launches />);

      await waitFor(() => {
        expect(screen.getByText("Error: Network Error")).toBeInTheDocument();
      });
    });
  });
});
