
import Diagram from "../main/Diagram";
import FileManager from "../main/FileManager";

test("heart", () => {
  const d: Diagram = new Diagram();
  const p = d.main.addPath(0, 0);
  p.moveToAbsolute( 10, 30);
  p.ellipticArcAbsolute(20, 20, 0, false, true, 50, 30);
  p.ellipticArcAbsolute(20, 20, 0, false, true, 90, 30);
  p.quadraticBezierAbsolute( 90, 60, 50, 90);
  p.quadraticBezierAbsolute( 10, 60, 10, 30);
  p.closePath();

  const fm = new FileManager("./build/");
  fm.saveAsSVG (d, "heart");
});