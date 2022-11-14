import { render, screen } from "@testing-library/react";
import AppContext from "../context/AppContext";
import Header from "../components/shared/header/Header";

const renderComponent = () => {
  const appState = {
    state: {
      currentHomeTab: "project",
    },
    changeCurrentHomeTab: jest.fn(),
  };

  render(
    <AppContext.Provider value={appState}>
      <Header />
    </AppContext.Provider>
  );
};

describe("Header", () => {
  it("render header appropriately", () => {
    renderComponent();
    expect(screen.getByText(/Listado de proyectos/i)).toBeInTheDocument();
    expect(screen.getByText(/Transacciones globales/i)).toBeInTheDocument();
    expect(screen.getByText(/Mi perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/Salir/i)).toBeInTheDocument();
  });
});
