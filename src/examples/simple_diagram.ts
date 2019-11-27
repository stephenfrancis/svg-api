
import * as SVG from "../main/Entry";

const d: SVG.Diagram = new SVG.Diagram();

// const b1 = d.main.addTextBox(100,  50, "Origin of All Things", 100);
// const b2 = d.main.addTextBox(250, 150, "Destination of All Things", 120);
// const c  = d.main.addConnector(150, 50, "basic", "basic", "right-angled");
// b1.setPadding([ 0, 0, 0, 0, ]);
// c.addPathPoint(250,  50);
// c.addPathPoint(250, 150 - (b2.getHeight() / 2));

const fm = new SVG.FileManager("./build/");
fm.saveAsSVG(d, "simple_diagram");
