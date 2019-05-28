"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Diagram_1 = require("../src/Diagram");
var FileManager_1 = require("../src/FileManager");
test("heart", function () {
    var d = new Diagram_1.default();
    var p = d.main.addPath(0, 0);
    p.moveToAbsolute(10, 30);
    p.ellipticArcAbsolute(20, 20, 0, false, true, 50, 30);
    p.ellipticArcAbsolute(20, 20, 0, false, true, 90, 30);
    p.quadraticBezierAbsolute(90, 60, 50, 90);
    p.quadraticBezierAbsolute(10, 60, 10, 30);
    p.closePath();
    var fm = new FileManager_1.default("./build/");
    fm.saveAsSVG(d, "heart");
});
