
import Arrowhead from "./Arrowhead";
import Element from "./Element";
import Path from "./Path";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Connector extends Element {
  private arrowhead_size: number;
  private end_arrowhead: Types.ArrowheadStyle;
  private path_points: [ number, number ][];
  private path_style: Types.PathStyle;
  private start_arrowhead: Types.ArrowheadStyle;


  constructor(styleset: StyleSet, x_pos: number, y_pos: number,
      start_arrowhead?: Types.ArrowheadStyle, end_arrowhead?: Types.ArrowheadStyle,
      path_style?: Types.PathStyle) {
    super(styleset, x_pos, y_pos);
    this.start_arrowhead = start_arrowhead;
    this.  end_arrowhead =   end_arrowhead;
    this.path_style = path_style;
    this.path_points = [ [ x_pos, y_pos ] ];
  }


  public addPathPoint(x_pos: number, y_pos: number): Connector {
    this.path_points.push([ x_pos, y_pos] );
    return this;
  }


  private drawArrowHead(to_path_point: [ number, number ], from_path_point: [ number, number ],
      style: Types.ArrowheadStyle): string {
    if (style !== "basic") {
      return null;
    }
    const a = new Arrowhead(this.getStyleSet(), to_path_point[0], to_path_point[1],
      Math.atan2(to_path_point[1] - from_path_point[1], to_path_point[0] - from_path_point[0]) * 180 / Math.PI,
      this.arrowhead_size);
    return a.getMarkup();
  }


  public getExtremes(): Types.Extremes {
    const extremes: Types.Extremes = {
      x_min: Number.POSITIVE_INFINITY,
      y_min: Number.POSITIVE_INFINITY,
      x_max: Number.NEGATIVE_INFINITY,
      y_max: Number.NEGATIVE_INFINITY,
    };
    this.path_points.forEach((point: [ number, number ]) => {
      extremes.x_min = Math.min(extremes.x_min, point[0]);
      extremes.y_min = Math.min(extremes.y_min, point[1]);
      extremes.x_max = Math.max(extremes.x_max, point[0]);
      extremes.y_max = Math.max(extremes.y_max, point[1]);
    });
    return extremes;
  }


  public getEndArrowhead(): Types.ArrowheadStyle {
    return this.end_arrowhead;
  }


  public getMarkup(): string {
    if (this.path_points.length < 2) {
      throw new Error("connector must have at least two path points");
    }
    let out: string = "<g "
      + this.getStyleSet().getStyleDefinition()
      + this.getTransformMarkup()
      + ">";
    const path_styles = Object.assign({}, this.getStyleSet(), {
      "fill": "none",
    });
    let path = new Path(new StyleSet(path_styles), this.path_points[0][0], this.path_points[0][1]);
    this.path_points.forEach((point: [ number, number ], index: number) => {
      if (index > 0) {
        if (this.path_style === "quad-bezier") {
          path.quadraticBezierSmoothAbsolute(point[0], point[1]);
        } else {
          path.lineToAbsolute(point[0], point[1]);
        }
      }
    });
    out += path.getMarkup();
    out += this.drawArrowHead(this.path_points[0], this.path_points[1], this.start_arrowhead);
    out += this.drawArrowHead(
      this.path_points[this.path_points.length - 1],
      this.path_points[this.path_points.length - 2],
      this.end_arrowhead);
    out += "</g>";
    return out;
  }


  public getPathStyle(): Types.PathStyle {
    return this.path_style;
  }


  public getStartArrowhead(): Types.ArrowheadStyle {
    return this.start_arrowhead;
  }


  public setEndArrowhead(arg: Types.ArrowheadStyle): void {
    this.end_arrowhead = arg;
  }


  public setPathStyle(arg: Types.PathStyle): void {
    this.path_style = arg;
  }


  public setStartArrowhead(arg: Types.ArrowheadStyle): void {
    this.start_arrowhead = arg;
  }

}
