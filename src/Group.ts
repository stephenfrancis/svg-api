
import Arrowhead from "./Arrowhead";
import Circle from "./Circle";
import Element from "./Element";
import Ellipse from "./Ellipse";
import Path from "./Path";
import Rectangle from "./Rectangle";
import StraightLine from "./StraightLine";
import StyleSet from "./StyleSet";
import Text from "./Text";
import * as Types from "./Types";

type ElementOrGroup = Element | Group;

export default class Group {
  private current_styleset: StyleSet;
  private elements: ElementOrGroup[];

  constructor(current_styleset: StyleSet) {
    this.current_styleset = current_styleset;
    this.elements = [];
  }


  public addArrowhead(x_pos: number, y_pos: number, angle: number, size?: number): Arrowhead {
    const element = new Arrowhead(x_pos, y_pos, angle, size);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addCircle(x_pos: number, y_pos: number, rad: number): Circle {
    const element = new Circle(x_pos, y_pos, rad);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addEllipse(x_pos: number, y_pos: number, x_rad: number, y_rad: number): Ellipse {
    const element = new Ellipse(x_pos, y_pos, x_rad, y_rad);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addGroup(current_styleset?: StyleSet): Group {
    const group = new Group(current_styleset || this.current_styleset);
    this.elements.push(group);
    return group;
  }


  public addPath(x_pos: number, y_pos: number): Path {
    const element = new Path(x_pos, y_pos);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addRectangle(x_pos: number, y_pos: number, width: number, height: number): Rectangle {
    const element = new Rectangle(x_pos, y_pos, width, height);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addStraightLine(x_from: number, y_from: number, x_to: number, y_to: number): StraightLine {
    const element = new StraightLine(x_from, y_from, x_to, y_to);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
  }


  public addText(x_pos: number, y_pos: number, text: string): Text {
    const element = new Text(x_pos, y_pos, text);
    element.setStyleSet(this.current_styleset);
    this.elements.push(element);
    return element;
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


  public getMarkup(): string {
    return "\n<g>\n" + this.elements.map((element: Element) => element.getMarkup()).join("\n") + "\n</g>";
  }


  public getNewElementStyleSet(): StyleSet {
    return this.current_styleset;
  }


  public setNewElementStyleSet(arg: StyleSet): void {
    this.current_styleset = arg;
  }

}
