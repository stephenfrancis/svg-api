
import Arrowhead from "./Arrowhead";
import Circle from "./Circle";
import Connector from "./Connector";
import Element from "./Element";
import Ellipse from "./Ellipse";
import Path from "./Path";
import Rectangle from "./Rectangle";
import StraightLine from "./StraightLine";
import StyleSet from "./StyleSet";
import Text from "./Text";
import TextBox from "./TextBox";
import * as Types from "./Types";


export default class Group  extends Element{
  private current_styleset: StyleSet;
  private elements: Element[];
  private positioned: boolean;

  constructor(current_styleset: StyleSet, x_pos?: number, y_pos?: number) {
    super(current_styleset, x_pos || 0, y_pos || 0);
    this.positioned = (typeof x_pos === "number");
    this.current_styleset = current_styleset;
    this.elements = [];
  }


  public addArrowhead(x_pos: number, y_pos: number, angle: number, size?: number): Arrowhead {
    const element = new Arrowhead(this.current_styleset, x_pos, y_pos, angle, size);
    this.elements.push(element);
    return element;
  }


  public addCircle(x_pos: number, y_pos: number, rad: number): Circle {
    const element = new Circle(this.current_styleset, x_pos, y_pos, rad);
    this.elements.push(element);
    return element;
  }


  public addConnector(x_pos: number, y_pos: number, start_arrowhead?: Types.ArrowheadStyle,
      end_arrowhead?: Types.ArrowheadStyle, path_style?: Types.PathStyle): Connector {
    const element = new Connector(this.current_styleset, x_pos, y_pos,
      start_arrowhead, end_arrowhead, path_style);
    this.elements.push(element);
    return element;
  }


  public addEllipse(x_pos: number, y_pos: number, x_rad: number, y_rad: number): Ellipse {
    const element = new Ellipse(this.current_styleset, x_pos, y_pos, x_rad, y_rad);
    this.elements.push(element);
    return element;
  }


  public addGroup(current_styleset?: StyleSet, x_pos?: number, y_pos?: number): Group {
    const group = new Group(current_styleset || this.current_styleset, x_pos, y_pos);
    this.elements.push(group);
    return group;
  }


  public addPath(x_pos: number, y_pos: number): Path {
    const element = new Path(this.current_styleset, x_pos, y_pos);
    this.elements.push(element);
    return element;
  }


  public addRectangle(x_pos: number, y_pos: number, width: number, height: number): Rectangle {
    const element = new Rectangle(this.current_styleset, x_pos, y_pos, width, height);
    this.elements.push(element);
    return element;
  }


  public addStraightLine(x_from: number, y_from: number, x_to: number, y_to: number): StraightLine {
    const element = new StraightLine(this.current_styleset, x_from, y_from, x_to, y_to);
    this.elements.push(element);
    return element;
  }


  public addText(x_pos: number, y_pos: number, text: string): Text {
    const element = new Text(this.current_styleset, x_pos, y_pos, text);
    this.elements.push(element);
    return element;
  }


  public addTextBox(x_pos: number, y_pos: number, text: string, width?: number): TextBox {
    const element = new TextBox(this.current_styleset, x_pos, y_pos, text, width);
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
      extremes.x_min = Math.min(extremes.x_min, elem_extr.x_min + this.getX());
      extremes.y_min = Math.min(extremes.y_min, elem_extr.y_min + this.getY());
      extremes.x_max = Math.max(extremes.x_max, elem_extr.x_max + this.getX());
      extremes.y_max = Math.max(extremes.y_max, elem_extr.y_max + this.getY());
      // console.log(`checking extremes given elem: ${JSON.stringify(elem_extr)} to give: ${JSON.stringify(extremes)}`);
    });
    return extremes;
  }


  public getMarkup(): string {
    if (this.positioned) {
      return "\n<svg x='" + this.getX() + "' y='" + this.getY() + "'>\n" + this.elements.map((element: Element) => element.getMarkup()).join("\n") + "\n</svg>";
    }
    return "\n<g>\n" + this.elements.map((element: Element) => element.getMarkup()).join("\n") + "\n</g>";
  }


  public getNewElementStyleSet(): StyleSet {
    return this.current_styleset;
  }


  public setNewElementStyleSet(arg: StyleSet): void {
    this.current_styleset = arg;
  }

}
