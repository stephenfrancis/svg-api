
import Element from "./Element";
import * as Types from "./Types";

export default class Ellipse extends Element {
  private x_rad: number;
  private y_rad: number;

  constructor(x_pos: number, y_pos: number, x_rad: number, y_rad: number) {
    super(x_pos, y_pos);
    this.x_rad = x_rad;
    this.y_rad = y_rad;
  }

  public getExtremes(): Types.Extremes {
    return {
      x_min: this.getX() - this.x_rad,
      y_min: this.getY() - this.y_rad,
      x_max: this.getX() + this.x_rad,
      y_max: this.getY() + this.y_rad,
    };
  }


  public getMarkup(): string {
    return "<ellipse"
      + " cx='" + this.getX() + "'"
      + " cy='" + this.getY() + "'"
      + " rx='" + this.x_rad + "'"
      + " ry='" + this.y_rad + "'"
      + " " + this.getStyleSet().getStyleDefinition()
      + this.getTransformMarkup()
      + " />";
  }


  public getRadiusX(): number {
    return this.x_rad;
  }


  public getRadiusY(): number {
    return this.y_rad;
  }


  public setRadiusX(arg: number): void {
    this.x_rad = arg;
  }


  public setRadiusY(arg: number): void {
    this.y_rad = arg;
  }

}
