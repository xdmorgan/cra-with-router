import pages from "./index";

describe("Page data config", () => {
  test.each(Object.entries(pages))(
    "Ensure %p page has valid metadata",
    async (name, meta) => {
      expect(typeof meta.route).toEqual("string");
      expect(typeof meta.name).toEqual("string");
      expect(typeof meta.component).toEqual("function");
    }
  );

  test("Should not have changed", () => {
    expect(pages).toMatchInlineSnapshot(`
      Object {
        "/": Object {
          "component": [Function],
          "name": "Homepage",
          "route": "/",
        },
      }
    `);
  });
});
