import { renderHook } from "@testing-library/react";
import useGetProjects from "./useGetProjects";

describe("useGetProjects", () => {
  it("should call getProjects", () => {
    const { result } = renderHook(() => useGetProjects());

    expect(result.current).toBeDefined();
  });
});
