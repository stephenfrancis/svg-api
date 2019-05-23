
import * as Fs from "fs";
import Diagram from "./Diagram";


const head1 = '<!DOCTYPE html>'
+ '<html lang="en">'
+   '<head>'
+     '<title>';
const head2 = '</title>'
+     '<meta charset="utf-8">'
+     '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />'
+     '<meta name="author" content="Stephen Francis">'
+     '<meta http-equiv="X-UA-Compatible" content="IE=edge" />'
+     '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
+     '<link rel="stylesheet" href="../public/svg.css" />'
+   '</head>'
+   '<body>'
+     '<h1>';
const head3 = '</h1>';
const foot = "</body></html>";


export default class FileManager {
  private path: string;
  private encoding: string;

  constructor(path, encoding) {
    this.path = path || "";
    this.encoding = encoding || "utf8";
  }


  public saveAsHTML(d: Diagram, filename: string): void {
    const title: string = d.getTitle();
    Fs.writeFileSync(
      this.path + filename + ".html",
      head1 + title + head2 + title + head3 + d.getMarkup() + foot,
      {
        encoding: this.encoding,
      }
    );
  }


  public saveAsSVG(d: Diagram, filename: string): void {
    Fs.writeFileSync(
      this.path + filename + ".svg",
      d.getMarkup(),
      {
        encoding: this.encoding,
      }
    );
  }

}
