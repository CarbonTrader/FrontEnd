import { act, renderHook } from "@testing-library/react";
import useInitialState from "./useInitialState";

describe("useInitialState", () => {
  it("should call changeCurrentItem", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeCurrentItem("test");
    });

    expect(result.current.state.currentItem).toEqual("test");
  });

  it("should call changeCurrentHomeTab", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeCurrentHomeTab("test");
    });

    expect(result.current.state.currentHomeTab).toEqual("test");
  });

  it("should call changeRegisterOption", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeRegisterOption("test");
    });

    expect(result.current.state.registerOption).toEqual("test");
  });

  it("should call changeUser", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeUser("test");
    });

    expect(result.current.state.user).toEqual("test");
  });

  it("should call showInfo", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.showInfo("test");
    });

    expect(result.current.state.project).toEqual("test");
  });

  it("should call changeFirstSection", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeFirstSection();
    });

    expect(result.current.state.firstSection).toEqual("info");
    expect(result.current.state.secondSection).toEqual("check");
  });

  it("should call changeprojectListItem", () => {
    const { result } = renderHook(() => useInitialState());

    act(() => {
      result.current.changeprojectListItem("test");
    });

    expect(result.current.state.projectListItem).toEqual("test");
  });
});
