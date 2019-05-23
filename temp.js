
const Diagram = require("./src/Diagram").default;
const d = new Diagram();

                                               // top-left  bottom-right
const r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40
const r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50

                                    // extremes    -5,  0     65,  50

console.log(JSON.stringify(d.main.getExtremes()));
const sl = d.main.addStraightLine( -10, 30, 40, 80);
console.log(JSON.stringify(d.main.getExtremes()));

console.log(d.getMarkup());

const FileManager = require("./src/FileManager").default;
const fm = new FileManager("./build/");

fm.saveAsHTML(d, "example");
fm.saveAsSVG (d, "example");

