
import Element from "./Element";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Circle extends Element {
  private rad: number;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number, rad: number) {
    super(styleset, x_pos, y_pos);
    this.rad = rad;
  }

  public getExtremes(): Types.Extremes {
    return {
      x_min: this.getX() - this.rad,
      y_min: this.getY() - this.rad,
      x_max: this.getX() + this.rad,
      y_max: this.getY() + this.rad,
    };
  }


  public getMarkup(): string {
    return "<circle"
      + " cx='" + this.getX() + "'"
      + " cy='" + this.getY() + "'"
      + " r='"  + this.rad + "'"
      + " " + this.getStyleSet().getStyleDefinition()
      + this.getTransformMarkup()
      + " />";
  }


  public getRadius(): number {
    return this.rad;
  }


  public setRadius(arg: number): void {
    this.rad = arg;
  }

}
