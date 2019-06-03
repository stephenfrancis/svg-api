
import Element from "./Element";
import Path from "./Path";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Arrowhead extends Element {
  private angle: number;
  private size: number;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number, angle: number, size?: number) {
    super(styleset, x_pos, y_pos);
    this.angle = angle;
    this.size = size || 10;
  }

  public getExtremes(): Types.Extremes {
    return {
      x_min: this.getX(),
      y_min: this.getY(),
      x_max: this.getX(),
      y_max: this.getY(),
    };
  }


  public getMarkup(): string {
    const path = new Path(this.getStyleSet(), this.getX(), this.getY());
    path.lineToRelative( -this.size,   this.size     / 3);
    path.lineToRelative(          0, - this.size * 2 / 3);
    path.closePath();
    path.setStyleSet(this.getStyleSet());
    path.getTransform().addRotate(this.angle, this.getX(), this.getY());
    return path.getMarkup();
  }


  public getAngle(): number {
    return this.angle;
  }


  public getSize(): number {
    return this.size;
  }


  public setAngle(arg: number): void {
    this.angle = arg;
  }


  public setSize(arg: number): void {
    this.size = arg;
  }

}
