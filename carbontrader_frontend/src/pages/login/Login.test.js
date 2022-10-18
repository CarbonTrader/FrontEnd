import { fireEvent, render, screen } from "@testing-library/react";
import UserContext from "../../context/UserContext";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import * as UserService from "../../services/userService";

const renderComponent = () => {
  const userState = {
    changeEmail: jest.fn(),
    changePassword: jest.fn(),
    changeToken: jest.fn(),
    user: "test-user",
  };

  render(
    <UserContext.Provider value={userState}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

describe("Login", () => {
  beforeEach(() => {
    renderComponent();
  });

  it("render login appropriately", () => {
    expect(screen.getByText(/CarbonTrader/i)).toBeInTheDocument();
    expect(screen.getByText(/¿No estas registrado?/i)).toBeInTheDocument();
    expect(screen.getByText(/Registrate aquí/i)).toBeInTheDocument();
    expect(screen.getByText(/Ingresar/i)).toBeInTheDocument();
  });

  it("called logInWithEmailAndPassword method", () => {
    const handleSignIn = jest.spyOn(UserService, "logInWithEmailAndPassword");
    const button = screen.getByText(/Ingresar/i);

    fireEvent.click(button);
    expect(handleSignIn).toHaveBeenCalled();
  });
});
