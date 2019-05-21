
import Element from "./Element";
import Rectangle from "./Rectangle";
import * as Types from "./Types";

type ElementOrGroup = Element | Group;

export default class Group {
  private elements: ElementOrGroup[];

  constructor() {
    this.elements = [];
  }


  public addGroup(): Group {
    const group = new Group();
    this.elements.push(group);
    return group;
  }


  public addRectangle(x_pos: number, y_pos: number, width: number, height: number): Rectangle {
    const element = new Rectangle(x_pos, y_pos, width, height);
    this.elements.push(element);
    return element;
  }


  public getMarkup(): string {
    return "<g>" + this.elements.map((element: Element) => element.getMarkup()) + "</g>";
  }


  public getExtremes(): Types.Extremes {
    const extremes: Types.Extremes = {
      x_min: Number.POSITIVE_INFINITY,
      y_min: Number.POSITIVE_INFINITY,
      x_max: Number.NEGATIVE_INFINITY,
      y_max: Number.NEGATIVE_INFINITY,
    };
    this.elements.forEach((element: Element) => {
      const elem_extr: Types.Extremes = element.getExtremes();
      extremes.x_min = Math.min(extremes.x_min, elem_extr.x_min);
      extremes.y_min = Math.min(extremes.y_min, elem_extr.y_min);
      extremes.x_max = Math.max(extremes.x_max, elem_extr.x_max);
      extremes.y_max = Math.max(extremes.y_max, elem_extr.y_max);
    });
    return extremes;
  }

}
