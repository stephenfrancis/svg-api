
import Diagram from "../main/Diagram";
import FileManager from "../main/FileManager";
import StyleSet from "../main/StyleSet";

const d: Diagram = new Diagram();

d.main.setNewElementStyleSet(new StyleSet({
  "fill" : "none",
  "stroke-width": "1px",
  "stroke"   : "#000",
  "font-size": "10px",
}));

d.main.addTextBox(50, 20, "Able was I ere I saw Elba", 80);

d.main.setNewElementStyleSet(new StyleSet({
  "fill" : "none",
  "stroke-width": "1px",
  "stroke"   : "#000",
  "font-size": "12px",
}));

d.main.addTextBox(180, 20, "Able was I ere I saw Elba", 120);

d.main.setNewElementStyleSet(new StyleSet({
  "fill" : "none",
  "stroke-width": "1px",
  "stroke"   : "#000",
  "font-size": "16px",
}));

d.main.addTextBox(60, 80, "Able was I ere I saw Elba", 100);

d.main.setNewElementStyleSet(new StyleSet({
  "fill" : "none",
  "stroke-width": "1px",
  "stroke"   : "#000",
  "font-size": "24px",
}));

d.main.addTextBox(200, 100, "Able was I ere I saw Elba", 150);

const fm = new FileManager("./build/examples");
fm.saveAsSVG(d, "text_test3");
