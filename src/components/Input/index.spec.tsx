import {
  render,
  screen,
  RenderResult,
  fireEvent,
  act,
} from "@testing-library/react";
import { Input } from "./index";

describe("Input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />);
    console.log("renderResult >>", renderResult);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("should empty in input on initial render", () => {
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });

  it("should show input text", () => {
    const inputText = "Test Input Text";
    const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

    act(() => {
      fireEvent.change(inputNode, { target: { value: inputText } });
    });

    expect(inputNode).toHaveValue(inputText);
  });
});
