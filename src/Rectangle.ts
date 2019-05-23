
import Element from "./Element";
import * as Types from "./Types";

export default class Rectangle extends Element {
  private height: number;
  private width: number;

  constructor(x_pos: number, y_pos: number, width: number, height: number) {
    super(x_pos, y_pos);
    this.height = height;
    this.width  = width;
  }

  public getExtremes(): Types.Extremes {
    return {
      x_min: (this.getX() - (this.width  / 2)),
      y_min: (this.getY() - (this.height / 2)),
      x_max: (this.getX() + (this.width  / 2)),
      y_max: (this.getY() + (this.height / 2)),
    };
  }


  public getMarkup(): string {
    return "<rect"
     + " x='" + (this.getX() - (this.width  / 2)) + "'"
     + " y='" + (this.getY() - (this.height / 2)) + "'"
     + " width='"  + this.width  + "'"
     + " height='" + this.height + "'"
     + " " + this.getStyleSet().getStyleDefinition()
     + " />";
  }


  public getHeight(): number {
    return this.height;
  }


  public getWidth(): number {
    return this.width;
  }


  public setHeight(arg: number): void {
    this.height = arg;
  }


  public setWidth(arg: number): void {
    this.width = arg;
  }

}
