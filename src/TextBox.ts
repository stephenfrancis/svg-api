
import Element from "./Element";
import Rectangle from "./Rectangle";
import StyleSet from "./StyleSet";
import Text from "./Text";
import * as Types from "./Types";

export default class TextBox extends Element {
  private text: string;
  private width: number;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number, text: string, width?: number) {
    super(styleset, x_pos, y_pos);
    this.text = text;
    this.width = width || 150;
  }


  public getExtremes(): Types.Extremes {
    const width: number = this.getWidth();
    const height: number = this.getHeight();
    return {
      x_min: this.getX() - (width / 2),
      y_min: this.getY() - (height / 2),
      x_max: this.getX() + (width / 2),
      y_max: this.getY() + (height / 2),
    };
  }


  public getMarkup(): string {
    let out = "";
    const text_parts: string[] = Text.chopTextToFitWidth(this.text,
      this.getStyleSet().getFontSize(), this.getWidth());
    const width: number = this.getWidth();
    const height: number = this.getHeight(text_parts.length);
    const rect = new Rectangle(this.getStyleSet(), this.getX(), this.getY(), width, height);
    rect.setStyleSet(this.getStyleSet());
    out += rect.getMarkup();
    for (let i = 0; i < text_parts.length; i += 1) {
      const elem = new Text(this.getStyleSet(), this.getX() - (width / 2),
        this.getY() + (this.getStyleSet().getLineHeight() * i),
        text_parts[i]);
      elem.setStyleSet(this.getStyleSet());
      out += elem.getMarkup();
    }
    return out;
  }


  public getHeight(lines?: number): number {
    if (typeof lines !== "number") {
      const text_parts: string[] = Text.chopTextToFitWidth(this.text,
        this.getStyleSet().getFontSize(), this.getWidth());
      lines = text_parts.length;
    }
    return lines * this.getStyleSet().getLineHeight();
  }


  public getText(): string {
    return this.text;
  }


  public getWidth(): number {
    return this.width;
  }


  public setText(arg: string): void {
    this.text = arg;
  }


  public setWidth(arg: number): void {
    this.width = arg;
  }

}
