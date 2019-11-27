
import * as SVG from "../main/Entry";
// import Diagram from "../main/Diagram";
// import FileManager from "../main/FileManager";
// import StyleSet from "../main/StyleSet";

const d: SVG.Diagram = new Diagram();

const    top_left : [ number, number ] = [  33,   0 ];
const    top_right: [ number, number ] = [ 865,   0 ];
const bottom_right: [ number, number ] = [ 865, 957 ];
const bottom_left : [ number, number ] = [  33, 990 ];

const house_wall_indent: [ number, number ][] = [
  [  33, 370 ],
  [   0, 370 ],
  [   0, 607 ],
  [  33, 607 ],
];

const bottom_wall_indent: [ number, number ][] = [
  [ 383, 957 ],
  [ 383, 990 ],
];

d.main.getNewElementStyleSet().setAttribute("fill", "none");
d.main.getNewElementStyleSet().setAttribute("stroke", "#F00");
d.main.getNewElementStyleSet().setAttribute("stroke-width", "2px");
const perimeter = d.main.addPath( top_left[0], top_left[1]);
perimeter
  .lineToAbsolute(   top_right[0],    top_right[1])
  .lineToAbsolute(bottom_right[0], bottom_right[1])
  .lineToAbsolute(bottom_wall_indent[0][0], bottom_wall_indent[0][1])
  .lineToAbsolute(bottom_wall_indent[1][0], bottom_wall_indent[1][1])
  .lineToAbsolute(bottom_left [0], bottom_left [1])
  .lineToAbsolute(house_wall_indent[3][0], house_wall_indent[3][1])
  .lineToAbsolute(house_wall_indent[2][0], house_wall_indent[2][1])
  .lineToAbsolute(house_wall_indent[1][0], house_wall_indent[1][1])
  .lineToAbsolute(house_wall_indent[0][0], house_wall_indent[0][1])
  .closePath();



const patio_centre: [ number, number ] = [
  (  top_right[0] - top_left[0]) / 2 + top_left[0],
  (bottom_left[1] - top_left[1]) / 2 + top_left[1],
];
const radius: number = 250;
console.log(`patio: [${patio_centre[0]}, ${patio_centre[1]}], radius: ${radius}`);
const getCircleXFromY = (y_pos: number, right_side?: boolean) => {
  return patio_centre[0] + (right_side ? 1 : -1) * Math.sqrt((radius + 10) ** 2 - (y_pos - patio_centre[1]) ** 2);
}
const getCircleYFromX = (x_pos: number, bottom_side?: boolean) => {
  return patio_centre[1] + (bottom_side ? 1 : -1) * Math.sqrt((radius + 10) ** 2 - (x_pos - patio_centre[0]) ** 2);
}

d.main.setNewElementStyleSet(new StyleSet({
  "stroke-width": "0px",
  "fill"        : "#ddd",
}));
const patio = d.main.addCircle(patio_centre[0], patio_centre[1], radius);

d.main.setNewElementStyleSet(new StyleSet({
  "stroke"      : "#000",
  "stroke-width": "2px",
  "fill"        : "#ddd",
}));
const shed_size = [ 240, 180 ];
const shed_centre = [
  top_right[0] - (shed_size[0] / 2) - 30,
  top_right[1] + (shed_size[1] / 2) + 30,
];
const shed = d.main.addRectangle(
  shed_centre[0],
  shed_centre[1],
  shed_size[0],
  shed_size[1]);


d.main.setNewElementStyleSet(new StyleSet({
  "stroke"      : "#bf6c42",
  "stroke-width": "20px",
  "fill"        : "#fff",
}));

const planter_1_coords_0_x: number = top_left[0] + 85;
const planter_1_coords_0_y: number = top_left[1] + 15;
const planter_1_coords_1_x: number = top_right[0] - shed_size[0] - 200; // 1_y = 0_y
const planter_1_coords_2_y: number = getCircleYFromX(planter_1_coords_1_x); // 2_x = 1_x
const planter_1_coords_3_y: number = house_wall_indent[0][1] - 10;
const planter_1_coords_3_x: number = getCircleXFromY(planter_1_coords_3_y);
const planter_1_coords_4_y: number = top_left[0] + 220;

d.main.addPath(planter_1_coords_0_x, planter_1_coords_0_y)
  .lineToAbsolute(planter_1_coords_1_x, planter_1_coords_0_y)
  .lineToAbsolute(planter_1_coords_1_x, planter_1_coords_2_y)
  .ellipticArcAbsolute(radius + 10, radius + 10, 40, false, false, planter_1_coords_3_x, planter_1_coords_3_y)
  .lineToAbsolute(planter_1_coords_3_x, planter_1_coords_4_y)
  .lineToAbsolute(planter_1_coords_0_x, planter_1_coords_4_y)
  .closePath();

d.main.addStraightLine(planter_1_coords_1_x, planter_1_coords_0_y, planter_1_coords_1_x + 170, planter_1_coords_0_y);


const planter_2_coords_0_x: number = top_right[0] - shed_size[0] - 70;
const planter_2_coords_0_y: number = top_right[1] + shed_size[1] + 45;
const planter_2_coords_1_y: number = getCircleYFromX(planter_2_coords_0_x); // 1_x = 0_x
const planter_2_coords_2_y: number = 620;
const planter_2_coords_2_x: number = getCircleXFromY(planter_2_coords_2_y, true);
const planter_2_coords_3_x: number = bottom_right[0] - 15;
const planter_2_coords_3_y: number = bottom_right[1] - 165;


d.main.addPath(planter_2_coords_0_x, planter_2_coords_0_y)
  .lineToAbsolute(planter_2_coords_0_x, planter_2_coords_1_y)
  .ellipticArcAbsolute(radius + 10, radius + 10, 40, false, true, planter_2_coords_2_x, planter_2_coords_2_y)
  .lineToAbsolute(planter_2_coords_3_x, planter_2_coords_3_y)
  .lineToAbsolute(planter_2_coords_3_x, planter_2_coords_0_y)
  .closePath();


const planter_3_coords_0_x: number = bottom_right[0] - 100;
const planter_3_coords_0_y: number = bottom_right[1] - 15;
const planter_3_coords_1_x: number = bottom_wall_indent[0][0] - 15; // 1_y = 0_y
const planter_3_coords_2_y: number = bottom_wall_indent[1][1] - 15; // 2_x = 1_x
const planter_3_coords_3_x: number = bottom_left[0] + 240; // 3_y = 2_y
const planter_3_coords_4_y: number = bottom_left[1] - 240; // 4_x = 3_x
const planter_3_coords_6_y: number = house_wall_indent[2][1]; // 6_x = 5_x
const planter_3_coords_5_x: number = getCircleXFromY(planter_3_coords_6_y, false); // 5_y = 4_y
const planter_3_coords_7_x: number = 555;
const planter_3_coords_7_y: number = getCircleYFromX(planter_3_coords_7_x, true);

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

d.main.setNewElementStyleSet(new StyleSet({
  "stroke"      : "#000",
  "stroke-width": "2px",
  "fill"        : "#42abd4",
}));

const hottub_size = [ 200, 200 ];
const hottub_centre = [
  bottom_left[0] + hottub_size[0] / 2 + 20,
  bottom_left[1] - hottub_size[1] / 2 - 20,
];
d.main.addRectangle(hottub_centre[0], hottub_centre[1], hottub_size[0], hottub_size[1]);


d.main.setNewElementStyleSet(new StyleSet({
  "stroke"   : "#000",
  "font-size": "24px",
}));
d.main.addText(shed_centre[0] - 40, shed_centre[1] - 40, "shed");
d.main.addText(patio_centre[0] - 40, patio_centre[1] - 40, "patio");
d.main.addText(hottub_centre[0] - 40, hottub_centre[1] + 40, "hot-tub");

d.main.setNewElementStyleSet(new StyleSet({
  "stroke"   : "#000",
  "font-size": "18px",
}));

const drawDistance = (from_x: number, from_y: number, to_x: number, to_y: number) => {
  d.main.addStraightLine(from_x, from_y, to_x, to_y);
  const dist: number = Math.ceil(Math.sqrt((to_x - from_x) ** 2 + (to_y - from_y) ** 2));
  d.main.addText((from_x + to_x) / 2 + 20, (from_y + to_y) / 2 + 30, String(dist));
  d.main.addArrowhead(from_x, from_y, Math.atan2(from_y - to_y, from_x - to_x) * 180 / Math.PI);
  d.main.addArrowhead(  to_x,   to_y, Math.atan2(to_y - from_y, to_x - from_x) * 180 / Math.PI);
};

drawDistance(shed_centre[0] - shed_size[0]  / 2, shed_centre[1], shed_centre[0] + shed_size[0] / 2, shed_centre[1]);
drawDistance(shed_centre[0] + 50, shed_centre[1] - shed_size[1] / 2, shed_centre[0] + 50, shed_centre[1] + shed_size[1] / 2);
const cos45 = Math.cos(Math.PI / 4);
const rnd_fac = 0.2;
drawDistance(patio_centre[0] - radius * cos45 + rnd_fac, patio_centre[1] + radius * cos45 - rnd_fac,
  patio_centre[0] + radius * cos45 - rnd_fac, patio_centre[1] - radius * cos45 + rnd_fac);
drawDistance(top_left[0], 220, 105, 220);
drawDistance(top_left[0], 300, 215, 300);
drawDistance( 10, top_left[1], 10, house_wall_indent[0][1]);
drawDistance( 10, house_wall_indent[1][1], 10, house_wall_indent[2][1]);
drawDistance( 10, house_wall_indent[3][1], 10, bottom_left[1]);
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

const fm = new FileManager("./build/");
fm.saveAsSVG (d, "garden");
