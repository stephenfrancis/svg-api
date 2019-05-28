
import Element from "./Element";
import * as Types from "./Types";

export default class StriaghtLine extends Element {
  private x_to: number;
  private y_to: number;

  constructor(x_pos: number, y_pos: number, x_to: number, y_to: number) {
    super(x_pos, y_pos);
    this.x_to = x_to;
    this.y_to = y_to;
  }


  public getExtremes(): Types.Extremes {
    return {
      x_min: Math.min(this.getX(), this.x_to),
      y_min: Math.min(this.getY(), this.y_to),
      x_max: Math.max(this.getX(), this.x_to),
      y_max: Math.max(this.getY(), this.y_to),
    };
  }


  public getMarkup(): string {
    return "<line"
     + " x1='" + this.getX() + "'"
     + " y1='" + this.getY() + "'"
     + " x2='" + this.x_to + "'"
     + " y2='" + this.y_to + "'"
     + " " + this.getStyleSet().getStyleDefinition()
     + this.getTransformMarkup()
     + " />";
  }


  public getXto(): number {
    return this.x_to;
  }


  public getYto(): number {
    return this.y_to;
  }


  public setXto(arg: number): void {
    this.x_to = arg;
  }


  public setYto(arg: number): void {
    this.y_to = arg;
  }

}
