
import Diagram from "../main/Diagram";
import FileManager from "../main/FileManager";
import StyleSet from "../main/StyleSet";

const d: Diagram = new Diagram();

d.main.setNewElementStyleSet(new StyleSet({
  "stroke-width": "1px",
  "stroke"   : "#000",
  "font-size": "10px",
}));

// d.main.addRectangle(200, 500, 500, 1000);

for (let i = 0; i < 96; i += 1) {
  d.main.addText(50, (i * 20), String(i + 64));
  d.main.addText(100, (i * 20), String.fromCharCode(i + 64).repeat(10));
}

d.main.setNewElementStyleSet(new StyleSet({
  "stroke"   : "#000",
}));

for (let i = 0; i < 100; i += 1) {
  d.main.addStraightLine(i * 10, 0, i * 10, 2000);
}

d.main.setNewElementStyleSet(new StyleSet({
  "stroke"   : "#f0f",
}));

for (let i = 0; i < 20; i += 1) {
  d.main.addStraightLine(i * 50, 0, i * 50, 2000);
}

const fm = new FileManager("./build/");
fm.saveAsSVG (d, "text_test");
