
import StyleSet from "./StyleSet";
import Transform from "./Transform";
import * as Types from "./Types";

export default class Element {
  private styleset: StyleSet;
  private transform: Transform;
  private x_pos: number;
  private y_pos: number;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number) {
    this.styleset = styleset;
    this.x_pos = x_pos;
    this.y_pos = y_pos;
  }


  public getExtremes(): Types.Extremes {
    throw new Error("to be overridden");
  }


  public getMarkup(): string {
    throw new Error("to be overridden");
  }


  public getStyleSet(): StyleSet {
    return this.styleset;
  }


  public getTransform(): Transform {
    if (!this.transform) {
      this.transform = new Transform();
    }
    return this.transform;
  }


  public getTransformMarkup(): string {
    if (!this.transform) {
      return "";
    }
    return " transform='" + this.transform.getMarkup() + "'";
  }


  public getX(): number {
    return this.x_pos;
  }


  public getY(): number {
    return this.y_pos;
  }


  public setStyleSet(arg: StyleSet): void {
    this.styleset = arg;
  }


  public setTransform(arg: Transform): void {
    this.transform = arg;
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
