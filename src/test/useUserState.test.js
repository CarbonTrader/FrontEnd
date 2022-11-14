import { act, renderHook } from "@testing-library/react";
import useUserState from "../hooks/useUserState";

describe("useUserState", () => {
  let localStorageGetItemMock = null;
  let localStorageSetItemMock = null;

  beforeAll(() => {
    localStorageGetItemMock = jest.spyOn(Storage.prototype, "getItem");
    localStorageSetItemMock = jest.spyOn(Storage.prototype, "setItem");
    localStorageGetItemMock.mockReturnValue("test");
  });

  it("should call changeUser", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changeUser();
    });

    expect(result.current.user).toBeDefined();
  });

  it("should call changeUid", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changeUid("test");
    });

    expect(result.current.user.uid).toEqual("test");
  });

  it("should call changeRole", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changeRole("test");
    });

    expect(result.current.user.role).toEqual("test");
  });

  it("should call changeEmail", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changeEmail("test");
    });

    expect(result.current.user.email).toEqual("test");
  });

  it("should call changePassword", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changePassword("test");
    });

    expect(result.current.user.password).toEqual("test");
  });

  it("should call changeToken", () => {
    const { result } = renderHook(() => useUserState());

    act(() => {
      result.current.changeToken();
    });

    expect(result.current.user.token).toEqual("");
  });
});
