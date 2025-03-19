import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";

import Pizza from "../Pizza";

describe("Pizza", () => {
  afterEach(cleanup);

  test("alt text renders on Pizza image", () => {
    const name = "My Favorite Pizza";
    const src = "https://picsum.photos/200";
    const { getByRole } = render(
      <Pizza name={name} description="super cool pizza" image={src} />,
    );

    const img = getByRole("img");
    expect(img.src).toBe(src);
    expect(img.alt).toBe(name);
  });

  test("to have default image if none is provided", () => {
    const { getByRole } = render(
      <Pizza name="Cool Pizza" description="super cool pizza" />,
    );

    const img = getByRole("img");
    expect(img.src).not.toBe("");
  });
});
