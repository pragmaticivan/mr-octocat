import { kFormatter, langColorMap } from "../";

describe("langColorMap", () => {
  it("returns color for existing mapped language", () => {
    expect(langColorMap("go")).toBe("#00ADD8");
  });

  it("returns color for existing mapped language if it's uppercase", () => {
    expect(langColorMap("GO")).toBe("#00ADD8");
  });

  it("returns default color when language is not mapped", () => {
    expect(langColorMap("notalang")).toBe("#CCCCCC");
  });
});

describe("kFormatter", () => {
  it("returns default number if below 999", () => {
    expect(kFormatter(118)).toBe(118);
  });

  it("returns formated number when it's above 999", () => {
    expect(kFormatter(1600)).toBe("1k");
  });
});
