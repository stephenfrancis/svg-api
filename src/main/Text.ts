
import Element from "./Element";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Text extends Element {
  private text: string;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number, text: string) {
    super(styleset, x_pos, y_pos);
    this.text = text;
  }

/*
  public getExtremes(): Types.Extremes {
    const width: number = this.getWidth();
    const height: number = this.getHeight();
    return {
      x_min: (this.getX() - (width  / 2)),
      y_min: (this.getY() - (height / 2)),
      x_max: (this.getX() + (width  / 2)),
      y_max: (this.getY() + (height / 2)),
    };
  }

  public getHeight(): number {
    return this.height;
  }
*/


  public getMarkup(): string {
    return "<text"
     + " x='" + (this.getX()) + "'"
     + " y='" + (this.getY()) + "'"
     + " " + this.getStyleSet().getStyleDefinition()
     + this.getTransformMarkup()
     + " >" + this.text + "</text>";
  }


  public getText(): string {
    return this.text;
  }


  public setText(arg: string): void {
    this.text = arg;
  }

/*
  public getWidth(): number {
    return this.width;
  }


  public setHeight(arg: number): void {
    this.height = arg;
  }


  public setWidth(arg: number): void {
    this.width = arg;
  }
*/

}
