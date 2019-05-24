
import Diagram from "../src/Diagram";
import StyleSet from "../src/StyleSet";

test("switch new element styleset", () => {
  const d: Diagram = new Diagram();
  const r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40

  const ss2 = new StyleSet();
  ss2.setAttribute("stroke", "#ABABAB");
  d.main.setNewElementStyleSet(ss2);
  const r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50

  expect(r1.getStyleSet().getAttribute("stroke")).toBe("#000000");
  expect(r2.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
});


test("change initial styleset", () => {
  const d: Diagram = new Diagram();
  const r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40

  // const ss2 = new StyleSet();
  d.main.getNewElementStyleSet().setAttribute("stroke", "#ABABAB");
  // d.main.setNewElementStyleSet(ss2);
  const r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50

  expect(r1.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
  expect(r2.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
});


