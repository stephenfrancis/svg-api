"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Diagram_1 = require("../src/Diagram");
var FileManager_1 = require("../src/FileManager");
test("basic", function () {
    var d = new Diagram_1.default();
    expect(d.getTitle()).toBe("<untitled>");
    d.setTitle("Test Diagram");
    expect(d.getTitle()).toBe("Test Diagram");
    expect(d.main.getNewElementStyleSet().getAttribute("stroke")).toBe("#000000");
    expect(d.main.getExtremes()).toEqual(expect.objectContaining({
        x_min: Number.POSITIVE_INFINITY,
        y_min: Number.POSITIVE_INFINITY,
        x_max: Number.NEGATIVE_INFINITY,
        y_max: Number.NEGATIVE_INFINITY,
    }));
    // top-left  bottom-right
    var r1 = d.main.addRectangle(10, 20, 30, 40); //  -5,  0     25,  40
    var r2 = d.main.addRectangle(40, 40, 50, 20); //  15, 30     65,  50
    // extremes    -5,  0     65,  50
    expect(r1.getHeight()).toBe(40);
    expect(r1.getWidth()).toBe(30);
    expect(r2.getX()).toBe(40);
    expect(r2.getY()).toBe(40);
    expect(r2.getStyleSet()).toBe(d.main.getNewElementStyleSet());
    expect(d.main.getExtremes()).toEqual(expect.objectContaining({
        x_min: -5,
        y_min: 0,
        x_max: 65,
        y_max: 50,
    }));
    var sl = d.main.addStraightLine(-10, 30, 40, 80);
    expect(d.main.getExtremes()).toEqual(expect.objectContaining({
        x_min: -10,
        y_min: 0,
        x_max: 65,
        y_max: 80,
    }));
    expect(d.getMarkup()).toBe("<svg width='85' height='90' version='1.1' xmlns='http://www.w3.org/2000/svg'><g>"
        + "<rect x='-5' y='0' width='30' height='40' stroke='#000000' stroke-width='1px' fill='#808080' />"
        + "<rect x='15' y='30' width='50' height='20' stroke='#000000' stroke-width='1px' fill='#808080' />"
        + "<line x1='-10' y1='30' x2='40' y2='80' stroke='#000000' stroke-width='1px' fill='#808080' />"
        + "</g></svg>");
    var fm = new FileManager_1.default("./build/");
    fm.saveAsHTML(d, "example");
    fm.saveAsSVG(d, "example");
});
