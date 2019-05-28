
import Element from "./Element";
import * as Types from "./Types";

export default class Path extends Element {
  private extremes: Types.Extremes;
  private path_closed: boolean;
  private pieces: string[];
  private x_cur: number;
  private y_cur: number;

  constructor(x_pos: number, y_pos: number) {
    super(x_pos, y_pos);
    this.extremes = {
      x_min: x_pos,
      y_min: y_pos,
      x_max: x_pos,
      y_max: y_pos,
    };
    this.path_closed = false;
    this.pieces = [];
    this.x_cur = x_pos;
    this.y_cur = y_pos;
    this.moveToAbsolute(x_pos, y_pos);
  }


  private checkPathIsOpen(): void {
    if (this.path_closed) {
      throw new Error("path is closed, no more pieces can be added");
    }
  }

  public closePath(): Path {
    this.pieces.push("Z");
    this.path_closed = true;
    return this;
  }


  public cubicBezierAbsolute(x_cs: number, y_cs: number, x_ce: number, y_ce: number, x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`C ${x_cs},${y_cs} ${x_ce},${y_ce} ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public cubicBezierRelative(x_cs: number, y_cs: number, x_ce: number, y_ce: number, x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`c ${x_cs},${y_cs} ${x_ce},${y_ce} ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public cubicBezierSmoothAbsolute(x_ce: number, y_ce: number, x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`S ${x_ce},${y_ce} ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public cubicBezierSmoothRelative(x_ce: number, y_ce: number, x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`s ${x_ce},${y_ce} ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public ellipticArcAbsolute(x_rad: number, y_rad: number, angle: number, large_arc: boolean, anticlockwise: boolean, x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`A ${x_rad},${y_rad} ${angle},${large_arc ? 1 : 0},${anticlockwise ? 1 : 0} ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public ellipticArcRelative(x_rad: number, y_rad: number, angle: number, large_arc: boolean, anticlockwise: boolean, x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`a ${x_rad},${y_rad} ${angle},${large_arc ? 1 : 0},${anticlockwise ? 1 : 0} ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public getExtremes(): Types.Extremes {
    return this.extremes;
  }


  public getMarkup(): string {
    return "<path"
      + " d='" + this.pieces.join(" ") + "'"
      + " " + this.getStyleSet().getStyleDefinition()
      + this.getTransformMarkup()
      + " />";
  }


  public lineToAbsolute(x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`L ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public lineToRelative(x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`l ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public moveToAbsolute(x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`M ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public moveToRelative(x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`m ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public quadraticBezierAbsolute(x_c: number, y_c: number, x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`Q ${x_c},${y_c} ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public quadraticBezierRelative(x_c: number, y_c: number, x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`q ${x_c},${y_c} ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  public quadraticBezierSmoothAbsolute(x_end: number, y_end: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`T ${x_end},${y_end}`);
    this.setNewCurrentPositionAbsolute(x_end, y_end);
    return this;
  }


  public quadraticBezierSmoothRelative(x_delta: number, y_delta: number): Path {
    this.checkPathIsOpen();
    this.pieces.push(`t ${x_delta},${y_delta}`);
    this.setNewCurrentPositionRelative(x_delta, y_delta);
    return this;
  }


  private setNewCurrentPositionAbsolute(x_new: number, y_new: number): void {
    this.x_cur = x_new;
    this.y_cur = y_new;
    if (x_new > this.extremes.x_max) {
      this.extremes.x_max = x_new;
    }
    if (x_new < this.extremes.x_min) {
      this.extremes.x_min = x_new;
    }
    if (y_new > this.extremes.y_max) {
      this.extremes.y_max = y_new;
    }
    if (y_new < this.extremes.y_min) {
      this.extremes.y_min = y_new;
    }
  }


  private setNewCurrentPositionRelative(x_delta: number, y_delta: number): void {
    this.setNewCurrentPositionAbsolute(this.x_cur + x_delta, this.y_cur + y_delta);
  }

}
