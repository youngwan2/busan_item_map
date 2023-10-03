import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HccpSearch from "../../components/page/HccpSearch";
import userEvent from "@testing-library/user-event";

test("각 아이템을 클릭하면 모달창이 활성화된다", () => {
  const user = userEvent;
  render(
    <BrowserRouter>
      <HccpSearch />
    </BrowserRouter>
  );
  const itemDiv = screen.getByRole("listitem");
  console.log(itemDiv)
  const modalState = screen.getByText("true");
  expect(modalState).toBe("true");
  user.click(itemDiv);
  expect(modalState).toBe("false");
});
