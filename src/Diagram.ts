
import Group from "./Group";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Diagram {
  public main: Group;
  private title: string;

  constructor(title: string) {
    this.main = new Group(StyleSet.getInitialStyleSet());
    this.title = title || "<untitled>";
  }


  public getMarkup(): string {
    const extremes: Types.Extremes = this.main.getExtremes();
    return "<svg"
     + " width='"  + (extremes.x_max - extremes.x_min + 10) + "'"
     + " height='" + (extremes.y_max - extremes.y_min + 10) + "'"
     + " version='1.1'"
     + " xmlns='http://www.w3.org/2000/svg'>"
     + this.main.getMarkup()
     + "</svg>";
  }


  public getTitle(): string {
    return this.title;
  }


  public setTitle(arg: string): void {
    this.title = arg;
  }

}
