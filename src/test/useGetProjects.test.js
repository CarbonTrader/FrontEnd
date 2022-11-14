import { renderHook } from "@testing-library/react";
import useGetProjects from "../hooks/useGetProjects";

describe("useGetProjects", () => {
  it("should call getProjects", () => {
    const { result } = renderHook(() => useGetProjects());

    expect(result.current).toBeDefined();
  });
});
