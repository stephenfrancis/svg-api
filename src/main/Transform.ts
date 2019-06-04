
import * as Types from "./Types";

export default class Transform {
  private pieces: string[];

  constructor() {
    this.pieces = [];
  }


  public addRotate(angle: number, x?: number, y?: number): Transform {
    this.pieces.push(`rotate(${angle} ${x || ""} ${y || ""})`);
    return this;
  }


  public addScale(x: number, y?: number): Transform {
    this.pieces.push(`scale(${x} ${y || ""})`);
    return this;
  }


  public addSkewX(angle: number): Transform {
    this.pieces.push(`skewX(${angle})`);
    return this;
  }


  public addSkewY(angle: number): Transform {
    this.pieces.push(`skewY(${angle})`);
    return this;
  }


  public addTranslate(x: number, y?: number): Transform {
    this.pieces.push(`translate(${x} ${y || ""})`);
    return this;
  }


  public getMarkup(): string {
    return this.pieces.join(" ");
  }

}
