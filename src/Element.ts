
import * as Types from "./Types";

export default class Element {
  private x_pos: number;
  private y_pos: number;

  constructor(x_pos: number, y_pos: number) {
    this.x_pos = x_pos;
    this.y_pos = y_pos;
  }


  public getExtremes(): Types.Extremes {
    throw new Error("to be overridden");
  }


  public getMarkup(): string {
    throw new Error("to be overridden");
  }


  public getX(): number {
    return this.x_pos;
  }


  public getY(): number {
    return this.y_pos;
  }


  public setX(arg: number): void {
    this.x_pos = arg;
  }


  public setY(arg: number): void {
    this.y_pos = arg;
  }


  public toString(): string {
    return this.getMarkup();
  }

}
