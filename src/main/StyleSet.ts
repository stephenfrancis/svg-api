type AttributeName =
  | "fill"
  | "fill-opacity"
  | "font-size"
  | "stroke"
  | "stroke-width"
  | "stroke-linejoin";
type AttributeSet = { [A in AttributeName]: ValidationName };
type ValidationName = "colour" | "length" | "percentage" | "linejoin";
type ValidationSet = { [valid_set: string]: RegExp[] };

const attr_set: AttributeSet = {
  fill: "colour",
  "fill-opacity": "percentage",
  "font-size": "length",
  stroke: "colour",
  "stroke-width": "length",
  "stroke-linejoin": "linejoin",
};

const val_set: ValidationSet = {
  colour: [
    /^#[\da-fA-F]{3}$/,
    /^#[\da-fA-F]{6}$/,
    /rgb\(\d{1,2},\d{1,2},\d{1,2}\)$/,
    /^none$/,
  ],
  length: [/^\d+px$/],
  percentage: [/^\d+(\.\d+)?%$/],
  linejoin: [/^arcs$/, /^bevel$/, /^miter$/, /^miter-clip$/, /^round$/],
};

export default class StyleSet {
  private attributes: { [A in AttributeName]?: string };

  constructor(initial_attributes?: { [A in AttributeName]?: string }) {
    this.attributes = initial_attributes || {};
  }

  public getAttribute(attr_name: AttributeName): string {
    return this.attributes[attr_name];
  }

  public getFontSize(): number {
    return parseInt(this.getAttribute("font-size"), 10);
  }

  public static getInitialStyleSet(): StyleSet {
    return new StyleSet({
      stroke: "#000000",
      "stroke-width": "1px",
      fill: "#808080",
      "font-size": "16px",
    });
  }

  public getLineHeight(): number {
    return parseInt(this.getAttribute("font-size"), 10);
  }

  public getStyleDefinition(unquoted?: boolean): string {
    const quote_char: string = unquoted ? "" : "'";
    return Object.keys(this.attributes)
      .map(
        (attr_name: string) =>
          `${attr_name}=${quote_char}${this.attributes[attr_name]}${quote_char}`
      )
      .join(" ");
  }

  public setAttribute(attr_name: AttributeName, value: string): void {
    this.validateAttribute(attr_name, value);
    this.attributes[attr_name] = value;
  }

  public validateAs(val_type: ValidationName, value: string): boolean {
    let out: boolean = false;
    const regexes: RegExp[] = val_set[val_type];
    if (!regexes) {
      throw new Error(`unrecognized validation type: ${val_type}`);
    }
    for (let i: number = 0; i < regexes.length && !out; i += 1) {
      out = !!regexes[i].exec(value);
    }
    return out;
  }

  public validateAttribute(attr_name: AttributeName, value: string): void {
    const val_type: ValidationName = attr_set[attr_name];
    if (!val_type) {
      throw new Error(`unrecognized style attribute name: ${attr_name}`);
    }
    if (!this.validateAs(val_type, value)) {
      throw new Error(
        `value '${value}' of style attribute: ${attr_name} is not a valid ${val_type}`
      );
    }
  }
}
