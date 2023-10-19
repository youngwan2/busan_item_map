import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Recipe from "../components/page/recipe/Recipe";
import { BrowserRouter } from "react-router-dom";

const mockFn = jest.fn((p) => {
  return `${p}되었다.`;
});

test("버튼을 클릭하면 abc를 반환한다.", async () => {
  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <Recipe />
    </BrowserRouter>
  );
  const btnEl = screen.getByText("검색");

  await user.click(btnEl);
  // 목함수는 한 번  호출되었다.
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toBe("호출되었다.");
});
