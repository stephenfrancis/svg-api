
import Diagram from "../main/Diagram";
import FileManager from "../main/FileManager";
import StyleSet from "../main/StyleSet";

const d: Diagram = new Diagram();

const b1 = d.main.addTextBox(100,  50, "Origin of All Things", 100);
const b2 = d.main.addTextBox(250, 150, "Destination of All Things", 120);
const c  = d.main.addConnector(150, 50, "basic", "basic", "right-angled");
// b1.setPadding([ 0, 0, 0, 0, ]);
c.addPathPoint(250,  50);
c.addPathPoint(250, 150 - (b2.getHeight() / 2));

const fm = new FileManager("./build/");
fm.saveAsSVG(d, "simple_diagram");
