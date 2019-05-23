
import Element from "./Element";
import * as Types from "./Types";

export default class Text extends Element {
  private text: string;

  constructor(x_pos: number, y_pos: number, text: string) {
    super(x_pos, y_pos);
    this.text = text;
  }


  private estimateHeight(): number {
    return 20; // line height?
  }


  private estimateWidth(): number {
    return this.text.length * 10;
  }


  public getExtremes(): Types.Extremes {
    const height: number = this.estimateHeight();
    const width : number = this.estimateWidth();
    return {
      x_min: (this.getX() - (width  / 2)),
      y_min: (this.getY() - (height / 2)),
      x_max: (this.getX() + (width  / 2)),
      y_max: (this.getY() + (height / 2)),
    };
  }


  public getMarkup(): string {
    return "<text"
     + " x=" + (this.getX() - (this.estimateWidth()  / 2))
     + " y=" + (this.getY() - (this.estimateHeight() / 2))
     + " " + this.getStyleSet().getStyleDefinition()
     + " >" + encodeURIComponent(this.text) + "</text>";
  }


  public getText(): string {
    return this.text;
  }


  public setText(arg: string): void {
    this.text = arg;
  }

}
