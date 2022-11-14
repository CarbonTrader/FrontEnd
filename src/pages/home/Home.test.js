import React from "react";
import Home from "./Home";
import UserContext from "../../context/UserContext";
import "../../setupTests";
import AppContext from "../../context/AppContext";
import { render, screen } from "@testing-library/react";

const renderComponent = ({ tabName }) => {
  const appState = {
    state: {
      currentHomeTab: tabName,
    },
  };

  const userState = {
    changeUser: jest.fn(),
  };

  render(
    <AppContext.Provider value={appState}>
      <UserContext.Provider value={userState}>
        <Home />
      </UserContext.Provider>
    </AppContext.Provider>
  );
};

jest.mock("../../components/shared/header/Header", () => {
  return () => <h1>Header</h1>;
});

jest.mock("../../containers/projects/ProjectList", () => {
  return () => <h1>Listado de proyectos</h1>;
});

jest.mock("../../containers/globalTransactions/GlobalTransactions", () => {
  return () => <h1>Listado de transacciones</h1>;
});

jest.mock("../../containers/profile/UserProfile", () => {
  return () => <h1>Perfil</h1>;
});

jest.mock("../../containers/projects/MarketCredits", () => {
  return () => <h1>Marked Credits</h1>;
});

describe("Home", () => {

  it("renders appropriately when project current home tab", () => {
    renderComponent({ tabName: "project" });
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/listado de proyectos/i)).toBeInTheDocument();
  });

  it("renders appropriately when transactions current home tab", () => {
    renderComponent({ tabName: "transactions" });
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/listado de transacciones/i)).toBeInTheDocument();
  });

  it("renders appropriately when profile current home tab", () => {
    renderComponent({ tabName: "profile" });
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/perfil/i)).toBeInTheDocument();
  });

  it("renders appropriately when default current home tab", () => {
    renderComponent({ tabName: "test" });
    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/marked credits/i)).toBeInTheDocument();
  });
});
