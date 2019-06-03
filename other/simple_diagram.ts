
import Diagram from "../src/Diagram";
import FileManager from "../src/FileManager";
import StyleSet from "../src/StyleSet";

const d: Diagram = new Diagram();

const b1 = d.main.addTextBox(100,  50, "Origin of All Things", 100);
const b2 = d.main.addTextBox(300, 250, "Destination of All Things", 100);
const c = d.main.addConnector(150, 50, "basic", "basic", "right-angled");
c.addPathPoint(300,  50);
c.addPathPoint(300, 200);

const fm = new FileManager("./build/");
fm.saveAsSVG(d, "simple_diagram");
