import React from "react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("render component", () => {
    render(<Button />);
  });

  it("render with snapshot", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("render component with text", () => {
    render(<Button />);
    expect(screen.getByText(/click/)).toBeInTheDocument();
  });
  it("render multiply components", () => {
    render(
      <>
        <Button />
        <Button />
      </>
    );
    expect(screen.queryAllByRole("button").length).toBe(2);
  });

  it("button is desabled", () => {
    render(<Button disabled />);
    expect(screen.getByText("click")).toBeDisabled();
  });

//   it("button have style background red", () => {
//     render(<Button />);
//     expect(screen.getByText("click").toHaveStyle({ backgroundColor: "red" }));
//   });

    it("button click with user event", () => {
      const mockHandler = jest.fn();

      render(<Button onClick={mockHandler} />);
        
      userEvent.onButtonClick(screen.getByText("click"));
      expect(mockHandler).toBeCalledTimes(1);
    });
    it('button async click', async () => {
        const mocHandler = jest.fn();
        render(< Button onButtonClick={() => setTimeout(mocHandler,500)} />)

        userEvent.onButtonClick(screen.getByText(/click/))

        await waitFor(() =>{
            expect(mocHandler).toHaveBeenCalledTimes
        })
    })
});
