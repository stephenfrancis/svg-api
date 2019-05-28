"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Diagram_1 = require("../src/Diagram");
var FileManager_1 = require("../src/FileManager");
var StyleSet_1 = require("../src/StyleSet");
var d = new Diagram_1.default();
var top_left = [33, 0];
var top_right = [865, 0];
var bottom_right = [865, 957];
var bottom_left = [33, 990];
var house_wall_indent = [
    [33, 370],
    [0, 370],
    [0, 607],
    [33, 607],
];
var bottom_wall_indent = [
    [383, 957],
    [383, 990],
];
d.main.getNewElementStyleSet().setAttribute("fill", "none");
d.main.getNewElementStyleSet().setAttribute("stroke", "#F00");
d.main.getNewElementStyleSet().setAttribute("stroke-width", "2px");
var perimeter = d.main.addPath(top_left[0], top_left[1]);
perimeter
    .lineToAbsolute(top_right[0], top_right[1])
    .lineToAbsolute(bottom_right[0], bottom_right[1])
    .lineToAbsolute(bottom_wall_indent[0][0], bottom_wall_indent[0][1])
    .lineToAbsolute(bottom_wall_indent[1][0], bottom_wall_indent[1][1])
    .lineToAbsolute(bottom_left[0], bottom_left[1])
    .lineToAbsolute(house_wall_indent[3][0], house_wall_indent[3][1])
    .lineToAbsolute(house_wall_indent[2][0], house_wall_indent[2][1])
    .lineToAbsolute(house_wall_indent[1][0], house_wall_indent[1][1])
    .lineToAbsolute(house_wall_indent[0][0], house_wall_indent[0][1])
    .closePath();
var patio_centre = [
    (top_right[0] - top_left[0]) / 2 + top_left[0],
    (bottom_left[1] - top_left[1]) / 2 + top_left[1],
];
var radius = 250;
console.log("patio: [" + patio_centre[0] + ", " + patio_centre[1] + "], radius: " + radius);
var getCircleXFromY = function (y_pos, right_side) {
    return patio_centre[0] + (right_side ? 1 : -1) * Math.sqrt(Math.pow((radius + 10), 2) - Math.pow((y_pos - patio_centre[1]), 2));
};
var getCircleYFromX = function (x_pos, bottom_side) {
    return patio_centre[1] + (bottom_side ? 1 : -1) * Math.sqrt(Math.pow((radius + 10), 2) - Math.pow((x_pos - patio_centre[0]), 2));
};
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke-width": "0px",
    "fill": "#ddd",
}));
var patio = d.main.addCircle(patio_centre[0], patio_centre[1], radius);
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke": "#000",
    "stroke-width": "2px",
    "fill": "#ddd",
}));
var shed_size = [240, 180];
var shed_centre = [
    top_right[0] - (shed_size[0] / 2) - 30,
    top_right[1] + (shed_size[1] / 2) + 30,
];
var shed = d.main.addRectangle(shed_centre[0], shed_centre[1], shed_size[0], shed_size[1]);
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke": "#bf6c42",
    "stroke-width": "20px",
    "fill": "#fff",
}));
var planter_1_coords_0_x = top_left[0] + 85;
var planter_1_coords_0_y = top_left[1] + 15;
var planter_1_coords_1_x = top_right[0] - shed_size[0] - 200; // 1_y = 0_y
var planter_1_coords_2_y = getCircleYFromX(planter_1_coords_1_x); // 2_x = 1_x
var planter_1_coords_3_y = house_wall_indent[0][1] - 10;
var planter_1_coords_3_x = getCircleXFromY(planter_1_coords_3_y);
var planter_1_coords_4_y = top_left[0] + 220;
d.main.addPath(planter_1_coords_0_x, planter_1_coords_0_y)
    .lineToAbsolute(planter_1_coords_1_x, planter_1_coords_0_y)
    .lineToAbsolute(planter_1_coords_1_x, planter_1_coords_2_y)
    .ellipticArcAbsolute(radius + 10, radius + 10, 40, false, false, planter_1_coords_3_x, planter_1_coords_3_y)
    .lineToAbsolute(planter_1_coords_3_x, planter_1_coords_4_y)
    .lineToAbsolute(planter_1_coords_0_x, planter_1_coords_4_y)
    .closePath();
d.main.addStraightLine(planter_1_coords_1_x, planter_1_coords_0_y, planter_1_coords_1_x + 170, planter_1_coords_0_y);
var planter_2_coords_0_x = top_right[0] - shed_size[0] - 70;
var planter_2_coords_0_y = top_right[1] + shed_size[1] + 45;
var planter_2_coords_1_y = getCircleYFromX(planter_2_coords_0_x); // 1_x = 0_x
var planter_2_coords_2_y = 620;
var planter_2_coords_2_x = getCircleXFromY(planter_2_coords_2_y, true);
var planter_2_coords_3_x = bottom_right[0] - 15;
var planter_2_coords_3_y = bottom_right[1] - 165;
d.main.addPath(planter_2_coords_0_x, planter_2_coords_0_y)
    .lineToAbsolute(planter_2_coords_0_x, planter_2_coords_1_y)
    .ellipticArcAbsolute(radius + 10, radius + 10, 40, false, true, planter_2_coords_2_x, planter_2_coords_2_y)
    .lineToAbsolute(planter_2_coords_3_x, planter_2_coords_3_y)
    .lineToAbsolute(planter_2_coords_3_x, planter_2_coords_0_y)
    .closePath();
var planter_3_coords_0_x = bottom_right[0] - 100;
var planter_3_coords_0_y = bottom_right[1] - 15;
var planter_3_coords_1_x = bottom_wall_indent[0][0] - 15; // 1_y = 0_y
var planter_3_coords_2_y = bottom_wall_indent[1][1] - 15; // 2_x = 1_x
var planter_3_coords_3_x = bottom_left[0] + 240; // 3_y = 2_y
var planter_3_coords_4_y = bottom_left[1] - 240; // 4_x = 3_x
var planter_3_coords_6_y = house_wall_indent[2][1]; // 6_x = 5_x
var planter_3_coords_5_x = getCircleXFromY(planter_3_coords_6_y, false); // 5_y = 4_y
var planter_3_coords_7_x = 555;
var planter_3_coords_7_y = getCircleYFromX(planter_3_coords_7_x, true);
d.main.addPath(planter_3_coords_0_x, planter_3_coords_0_y)
    .lineToAbsolute(planter_3_coords_1_x, planter_3_coords_0_y)
    .lineToAbsolute(planter_3_coords_1_x, planter_3_coords_2_y)
    .lineToAbsolute(planter_3_coords_3_x, planter_3_coords_2_y)
    .lineToAbsolute(planter_3_coords_3_x, planter_3_coords_4_y)
    .lineToAbsolute(planter_3_coords_5_x, planter_3_coords_4_y)
    .lineToAbsolute(planter_3_coords_5_x, planter_3_coords_6_y)
    .ellipticArcAbsolute(radius + 10, radius + 10, 40, false, false, planter_3_coords_7_x, planter_3_coords_7_y)
    .closePath();
// d.main.addStraightLine(planter_3_coords_5_x - 100, planter_3_coords_6_y, planter_3_coords_5_x + 10, planter_3_coords_6_y);
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke": "#000",
    "stroke-width": "2px",
    "fill": "#42abd4",
}));
var hottub_size = [200, 200];
var hottub_centre = [
    bottom_left[0] + hottub_size[0] / 2 + 20,
    bottom_left[1] - hottub_size[1] / 2 - 20,
];
d.main.addRectangle(hottub_centre[0], hottub_centre[1], hottub_size[0], hottub_size[1]);
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke": "#000",
    "font-size": "24px",
}));
d.main.addText(shed_centre[0] - 40, shed_centre[1] - 40, "shed");
d.main.addText(patio_centre[0] - 40, patio_centre[1] - 40, "patio");
d.main.addText(hottub_centre[0] - 40, hottub_centre[1] + 40, "hot-tub");
d.main.setNewElementStyleSet(new StyleSet_1.default({
    "stroke": "#000",
    "font-size": "18px",
}));
var drawDistance = function (from_x, from_y, to_x, to_y) {
    d.main.addStraightLine(from_x, from_y, to_x, to_y);
    var dist = Math.ceil(Math.sqrt(Math.pow((to_x - from_x), 2) + Math.pow((to_y - from_y), 2)));
    d.main.addText((from_x + to_x) / 2 + 20, (from_y + to_y) / 2 + 30, String(dist));
    d.main.addArrowhead(from_x, from_y, Math.atan2(from_y - to_y, from_x - to_x) * 180 / Math.PI);
    d.main.addArrowhead(to_x, to_y, Math.atan2(to_y - from_y, to_x - from_x) * 180 / Math.PI);
};
drawDistance(shed_centre[0] - shed_size[0] / 2, shed_centre[1], shed_centre[0] + shed_size[0] / 2, shed_centre[1]);
drawDistance(shed_centre[0] + 50, shed_centre[1] - shed_size[1] / 2, shed_centre[0] + 50, shed_centre[1] + shed_size[1] / 2);
var cos45 = Math.cos(Math.PI / 4);
var rnd_fac = 0.2;
drawDistance(patio_centre[0] - radius * cos45 + rnd_fac, patio_centre[1] + radius * cos45 - rnd_fac, patio_centre[0] + radius * cos45 - rnd_fac, patio_centre[1] - radius * cos45 + rnd_fac);
drawDistance(top_left[0], 220, 105, 220);
drawDistance(top_left[0], 300, 215, 300);
drawDistance(10, top_left[1], 10, house_wall_indent[0][1]);
drawDistance(10, house_wall_indent[1][1], 10, house_wall_indent[2][1]);
drawDistance(10, house_wall_indent[3][1], 10, bottom_left[1]);
drawDistance(bottom_left[0], bottom_left[1] + 10, bottom_wall_indent[0][0], bottom_left[1] + 10);
drawDistance(bottom_wall_indent[1][0], bottom_left[1] + 10, bottom_right[0], bottom_left[1] + 10);
drawDistance(bottom_wall_indent[1][0] + 20, bottom_wall_indent[0][1], bottom_wall_indent[1][0] + 20, bottom_wall_indent[1][1]);
drawDistance(top_left[0], house_wall_indent[0][1] + 20, house_wall_indent[1][0], house_wall_indent[0][1] + 20);
drawDistance(hottub_centre[0] - hottub_size[0] / 2, hottub_centre[1] - 50, hottub_centre[0] + hottub_size[0] / 2, hottub_centre[1] - 50);
drawDistance(hottub_centre[0] + 50, hottub_centre[1] - hottub_size[1] / 2, hottub_centre[0] + 50, hottub_centre[1] + hottub_size[1] / 2);
drawDistance(435, 230, 545, 230);
drawDistance(640, 800, 740, 700);
drawDistance(planter_1_coords_0_x, 100, planter_1_coords_1_x, 100);
drawDistance(420, planter_1_coords_0_y, 420, planter_1_coords_2_y);
var fm = new FileManager_1.default("./build/");
fm.saveAsSVG(d, "garden");
