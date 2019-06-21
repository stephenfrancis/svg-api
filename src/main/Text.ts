
import Element from "./Element";
import StyleSet from "./StyleSet";
import * as Types from "./Types";

export default class Text extends Element {
  private text: string;

  constructor(styleset: StyleSet, x_pos: number, y_pos: number, text: string) {
    super(styleset, x_pos, y_pos);
    this.text = text;
  }


  public static chopTextToFitWidth(text: string, font_size: number, width: number, word_wrap?: boolean): string[] {
    let out: string[] = [ "" ];
    let curr_length: number = 0;
    let prev_split_posn: number = 0;
    let last_space_posn: number = 0;
    if (!Number.isFinite(width / font_size) || (width / font_size) < 5) {
      throw new Error(`width (${width}) / font size (${font_size}) must be >= 5`);
    }
    const wordWrapIfRequired = () => {
      if (word_wrap && (last_space_posn > prev_split_posn)) {
        const split_index: number = last_space_posn - prev_split_posn;
        out[out.length - 2] = out[out.length - 2].substr(0, split_index);
        i = last_space_posn + 1;
      }
    }
    let i: number = 0;
    while (i < text.length) {
      const code = text.charCodeAt(i);
      const new_length: number = latin_glyph_widths[String(code)] || 5;
      if (curr_length + new_length > (width * 10 / font_size)) {
        out.push("");
        curr_length = 0;
        wordWrapIfRequired();
        prev_split_posn = i;
      }
      if (code === 32) {
        last_space_posn = i;
      }
      out[out.length - 1] += text.substr(i, 1);
      curr_length += new_length;
      i += 1
    }
    // wordWrapIfRequired();
    return out;
  }


  private estimateHeight(): number {
    return 20; // line height?
  }


  public static estimateTextWidth(text: string, font_size: number): number {
    let out: number = 0;
    for (let i: number = 0; i < text.length; i += 1) {
      const code = text.charCodeAt(i);
      out += latin_glyph_widths[String(code)] || 0;
    }
    return Math.ceil(out * font_size / 10);
  }


  public estimateWidth(): number {
    return Text.estimateTextWidth(this.text, this.getStyleSet().getFontSize());
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
     + " x='" + (this.getX() - (this.estimateWidth()  / 2)) + "'"
     + " y='" + (this.getY() - (this.estimateHeight() / 2)) + "'"
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

}


const latin_glyph_widths = {
  "65": 7.2, // A
  "66": 6.6,
  "67": 6.6,
  "68": 7.2, // D
  "69": 6.1,
  "70": 5.6,
  "71": 7.1, // G
  "72": 7.1,
  "73": 3.3,
  "74": 3.8, // J
  "75": 7.1,
  "76": 6.1,
  "77": 8.8, // M
  "78": 7.1,
  "79": 7.1,
  "80": 5.6, // P
  "81": 7.2,
  "82": 6.6,
  "83": 5.6, // S
   "84": 6.2,
   "85": 7.1,
   "86": 7.1, // V
   "87": 9.4,
   "88": 7.2,
   "89": 7.2,
   "90": 6.2,
   "97": 4.5, // a
   "98": 5.0,
   "99": 4.4,
  "100": 5.0, // d
  "101": 4.4,
  "102": 3.2,
  "103": 5.0, // g
  "104": 5.0,
  "105": 2.8,
  "106": 2.7, // j
  "107": 5.0,
  "108": 2.8,
  "109": 7.8, // m
  "110": 5.0,
  "111": 5.0,
  "112": 5.0, // p
  "113": 5.0,
  "114": 3.4,
  "115": 3.8, // s
  "116": 2.8,
  "117": 5.0,
  "118": 5.0, // v
  "119": 7.2,
  "120": 5.0,
  "121": 5.0, // y
  "122": 4.4,
};
