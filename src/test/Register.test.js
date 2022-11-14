import { fireEvent, render, screen } from "@testing-library/react";
import UserContext from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";
import Register from "../pages/register/Register";
import * as UserService from "../services/userService";
import AppContext from "../context/AppContext";

const renderComponent = () => {
  const appState = {
    state: {},
    changeRegisterOption: jest.fn(),
  };

  const userState = {
    changeEmail: jest.fn(),
    changePassword: jest.fn(),
    changeToken: jest.fn(),
    changeUid: jest.fn(),
    user: "test-user",
  };

  render(
    <AppContext.Provider value={appState}>
      <UserContext.Provider value={userState}>
        <BrowserRouter>
          <Register />
        </BrowserRouter>
      </UserContext.Provider>
    </AppContext.Provider>
  );
};

describe("Register page", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("render appropriately register page", () => {
    expect(screen.getByText(/Registro/i)).toBeInTheDocument();
    expect(screen.getByText(/Registrarme/i)).toBeInTheDocument();
    expect(screen.getByText(/¿Ya estás registrado?/i)).toBeInTheDocument();
    expect(screen.getByText(/Ingresa aquí/i)).toBeInTheDocument();
  });

  it("called registerWithEmailAndPassword method", () => {
    const handleSignUp = jest.spyOn(
      UserService,
      "registerWithEmailAndPassword"
    );
    const button = screen.getByText(/Registrarme/i);

    fireEvent.click(button);
    expect(handleSignUp).toHaveBeenCalled();
  });
});
