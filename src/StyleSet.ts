
export default class StyleSet {
  private attributes: { [attr_name: string]: string };

  constructor() {
    this.attributes = {};
  }


  public getAttribute(attr_name: string): string {
    return this.attributes[attr_name];
  }


  public static getInitialStyleSet(): StyleSet {
    const initial_styleset: StyleSet = new StyleSet();
    initial_styleset.setAttribute("stroke", "#000000");
    initial_styleset.setAttribute("stroke-width", "1");
    initial_styleset.setAttribute("fill", "#808080");
    return initial_styleset;
  }


  public getStyleDefinition(unquoted?: boolean): string {
    const quote_char: string = unquoted ? "" : "'";
    return Object.keys(this.attributes)
      .map((attr_name: string) => `${attr_name}=${quote_char}${this.attributes[attr_name]}${quote_char}`)
      .join(" ");
  }


  public setAttribute(attr_name: string, value: string): void {
    this.attributes[attr_name] = value;
  }

}
