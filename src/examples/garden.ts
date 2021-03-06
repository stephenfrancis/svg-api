import * as SVG from "../main/Entry";

const d: SVG.Diagram = new SVG.Diagram();

const text_styleset = new SVG.StyleSet({
  stroke: "#000",
  "font-size": "18px",
});

const drawDistance = (
  from_x: number,
  from_y: number,
  to_x: number,
  to_y: number
) => {
  d.main.setNewElementStyleSet(text_styleset);
  d.main.addStraightLine(from_x, from_y, to_x, to_y);
  const dist: number = Math.ceil(
    Math.sqrt((to_x - from_x) ** 2 + (to_y - from_y) ** 2)
  );
  d.main.addText(
    (from_x + to_x) / 2 + 20,
    (from_y + to_y) / 2 + 30,
    String(dist)
  );
  // d.main.addArrowhead(from_x, from_y, Math.atan2(from_y - to_y, from_x - to_x) * 180 / Math.PI);
  // d.main.addArrowhead(  to_x,   to_y, Math.atan2(to_y - from_y, to_x - from_x) * 180 / Math.PI);
};

// House Walls
const top_left: [number, number] = [33, 0];
const top_right: [number, number] = [865, 0];
const bottom_right: [number, number] = [865, 957];
const bottom_left: [number, number] = [33, 990];

const house_wall_indent: [number, number][] = [
  [33, 370],
  [0, 370],
  [0, 607],
  [33, 607],
];

const bottom_wall_indent: [number, number][] = [
  [383, 957],
  [383, 990],
];

d.main.getNewElementStyleSet().setAttribute("fill", "none");
d.main.getNewElementStyleSet().setAttribute("stroke", "#F00");
d.main.getNewElementStyleSet().setAttribute("stroke-width", "2px");
const perimeter = d.main.addPath(top_left[0], top_left[1]);
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

drawDistance(10, top_left[1], 10, house_wall_indent[0][1]);
drawDistance(10, house_wall_indent[1][1], 10, house_wall_indent[2][1]);
drawDistance(10, house_wall_indent[3][1], 10, bottom_left[1]);
drawDistance(
  bottom_left[0],
  bottom_left[1] + 10,
  bottom_wall_indent[0][0],
  bottom_left[1] + 10
);
drawDistance(
  bottom_wall_indent[1][0],
  bottom_left[1] + 10,
  bottom_right[0],
  bottom_left[1] + 10
);
drawDistance(
  bottom_wall_indent[1][0] + 20,
  bottom_wall_indent[0][1],
  bottom_wall_indent[1][0] + 20,
  bottom_wall_indent[1][1]
);
drawDistance(
  top_left[0],
  house_wall_indent[0][1] + 20,
  house_wall_indent[1][0],
  house_wall_indent[0][1] + 20
);

// d.main.setNewElementStyleSet(
//   new SVG.StyleSet({
//     "stroke-width": "0px",
//     fill: "#ddd",
//   })
// );

// Shed
const shed_styleset = new SVG.StyleSet({
  stroke: "#000",
  "stroke-width": "2px",
  fill: "#ddd",
});

d.main.setNewElementStyleSet(shed_styleset);
const shed_size = [240, 180];
const shed_centre = [
  top_right[0] - shed_size[0] / 2 - 30,
  top_right[1] + shed_size[1] / 2 + 30,
];
const shed = d.main.addRectangle(
  shed_centre[0],
  shed_centre[1],
  shed_size[0],
  shed_size[1]
);
drawDistance(
  shed_centre[0] - shed_size[0] / 2,
  shed_centre[1],
  shed_centre[0] + shed_size[0] / 2,
  shed_centre[1]
);
drawDistance(
  shed_centre[0] + 50,
  shed_centre[1] - shed_size[1] / 2,
  shed_centre[0] + 50,
  shed_centre[1] + shed_size[1] / 2
);

// Planters
const planter_styleset = new SVG.StyleSet({
  stroke: "#bf6c42",
  "stroke-width": "20px",
  fill: "#fff",
});

const planter_1_max_length: number = 400;
const planter_1_max_width: number = 50;
const planter_1_coords_0_x: number = top_left[0] + 150;
const planter_1_coords_0_y: number = top_left[1] + 15;
const planter_1_coords_1_x: number = top_left[0] + 150 + planter_1_max_length; // 1_y = 0_y
const planter_1_coords_1_y: number = top_left[1] + 15 + planter_1_max_width; // 2_x = 1_x

d.main.setNewElementStyleSet(planter_styleset);
d.main
  .addPath(planter_1_coords_1_x, planter_1_coords_0_y)
  .lineToAbsolute(planter_1_coords_1_x, planter_1_coords_1_y)
  .lineToAbsolute(planter_1_coords_0_x, planter_1_coords_1_y)
  .lineToAbsolute(planter_1_coords_0_x, planter_1_coords_0_y);

drawDistance(planter_1_coords_0_x, 30, planter_1_coords_1_x, 30);
drawDistance(
  planter_1_coords_0_x + 100,
  planter_1_coords_0_y,
  planter_1_coords_0_x + 100,
  planter_1_coords_1_y
);

const planter_2_coords_0_x: number = top_right[0] - shed_size[0] - 30;
const planter_2_coords_0_y: number = top_right[1] + shed_size[1] + 45;
const planter_2_coords_1_y: number = top_right[1] + shed_size[1] + 145; // 1_x = 0_x
const planter_2_coords_1_x: number = top_right[0] - 120;
const planter_2_coords_2_y: number = bottom_right[1] - 250;
const planter_2_coords_2_x: number = top_right[0] - 20;

d.main.setNewElementStyleSet(planter_styleset);
d.main
  .addPath(planter_2_coords_0_x, planter_2_coords_0_y)
  .lineToAbsolute(planter_2_coords_0_x, planter_2_coords_1_y)
  .lineToAbsolute(planter_2_coords_1_x, planter_2_coords_1_y)
  .lineToAbsolute(planter_2_coords_1_x, planter_2_coords_2_y)
  .lineToAbsolute(planter_2_coords_2_x, planter_2_coords_2_y)
  .lineToAbsolute(planter_2_coords_2_x, planter_2_coords_0_y)
  .closePath();

drawDistance(
  planter_2_coords_0_x,
  planter_2_coords_0_y + 100,
  planter_2_coords_2_x,
  planter_2_coords_0_y + 100
);
drawDistance(
  planter_2_coords_0_x + 50,
  planter_2_coords_0_y,
  planter_2_coords_0_x + 50,
  planter_2_coords_1_y
);

const planter_3_coords_0_x: number = bottom_right[0] - 100;
const planter_3_coords_0_y: number = bottom_right[1] - 15;
const planter_3_coords_1_x: number = bottom_wall_indent[0][0] + 15; // 1_y = 0_y
const planter_3_coords_2_y: number = bottom_right[1] - 65;

d.main.setNewElementStyleSet(planter_styleset);
d.main
  .addPath(planter_3_coords_0_x, planter_3_coords_0_y)
  .lineToAbsolute(planter_3_coords_1_x, planter_3_coords_0_y)
  .lineToAbsolute(planter_3_coords_1_x, planter_3_coords_2_y)
  .lineToAbsolute(planter_3_coords_0_x, planter_3_coords_2_y)
  .closePath();

// d.main.addStraightLine(planter_3_coords_5_x - 100, planter_3_coords_6_y, planter_3_coords_5_x + 10, planter_3_coords_6_y);

// Hot Tub
const hot_tub_styleset = new SVG.StyleSet({
  stroke: "#000",
  "stroke-width": "2px",
  fill: "#42abd4",
});

d.main.setNewElementStyleSet(hot_tub_styleset);

const hottub_size = [200, 200];
const hottub_centre = [
  bottom_left[0] + hottub_size[0] / 2 + 75,
  bottom_left[1] - hottub_size[1] / 2 - 20,
];
d.main.addRectangle(
  hottub_centre[0],
  hottub_centre[1],
  hottub_size[0],
  hottub_size[1]
);
drawDistance(
  hottub_centre[0] - hottub_size[0] / 2,
  hottub_centre[1] - 50,
  hottub_centre[0] + hottub_size[0] / 2,
  hottub_centre[1] - 50
);
drawDistance(
  hottub_centre[0] + 50,
  hottub_centre[1] - hottub_size[1] / 2,
  hottub_centre[0] + 50,
  hottub_centre[1] + hottub_size[1] / 2
);

const title_text_styleset = new SVG.StyleSet({
  stroke: "#000",
  "font-size": "24px",
});

d.main.setNewElementStyleSet(title_text_styleset);
d.main.addText(shed_centre[0] - 40, shed_centre[1] - 40, "shed");
d.main.addText(hottub_centre[0] - 40, hottub_centre[1] + 40, "hot-tub");

// drawDistance(top_left[0], 220, 105, 220);
// drawDistance(top_left[0], 300, 215, 300);
// drawDistance(435, 230, 545, 230);
// drawDistance(640, 800, 740, 700);

// drawDistance(420, planter_1_coords_0_y, 420, planter_1_coords_2_y);

const fm = new SVG.FileManager("./build/");
fm.saveAsSVG(d, "garden");
