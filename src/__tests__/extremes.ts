
import Diagram from "../main/Diagram";
import FileManager from "../main/FileManager";

test("positioned group", () => {

  const d: Diagram = new Diagram();

  expect(d.main.getExtremes()).toEqual(expect.objectContaining({
    x_min: Number.POSITIVE_INFINITY,
    y_min: Number.POSITIVE_INFINITY,
    x_max: Number.NEGATIVE_INFINITY,
    y_max: Number.NEGATIVE_INFINITY,
  }));
                                                // top-left  bottom-right
  const r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,   0     25,  40


  const svg1 = d.main.addGroup(null, 100, 100);
  const r2 = svg1.addRectangle(10, 10, 10, 10);   //  95,  95    115, 115

  const svg2 = d.main.addGroup(null, -70, -70);
  const r3 = svg2.addRectangle(10, 10, 10, 10);   // -65, -65    -55, -55

                                      // extremes    -65, -65    115, 115

  expect(d.main.getExtremes()).toEqual(expect.objectContaining({
    x_min: -65,
    y_min: -65,
    x_max: 115,
    y_max: 115,
  }));


});
