"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Diagram_1 = require("../src/Diagram");
var StyleSet_1 = require("../src/StyleSet");
test("switch new element styleset", function () {
    var d = new Diagram_1.default();
    var r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40
    var ss2 = new StyleSet_1.default();
    ss2.setAttribute("stroke", "#ABABAB");
    d.main.setNewElementStyleSet(ss2);
    var r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50
    expect(r1.getStyleSet().getAttribute("stroke")).toBe("#000000");
    expect(r2.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
});
test("change initial styleset", function () {
    var d = new Diagram_1.default();
    var r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40
    // const ss2 = new StyleSet();
    d.main.getNewElementStyleSet().setAttribute("stroke", "#ABABAB");
    // d.main.setNewElementStyleSet(ss2);
    var r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50
    expect(r1.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
    expect(r2.getStyleSet().getAttribute("stroke")).toBe("#ABABAB");
});
