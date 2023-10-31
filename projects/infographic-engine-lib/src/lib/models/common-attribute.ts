import {SizeUnit} from "./size-unit";
import {Gradient} from "./gradient";
import {VerticalAlign} from "./vertical-align";

export class CommonAttribute {
  width: number;
  widthUnit: SizeUnit;
  height: number;
  heightUnit: SizeUnit;
  x: number;
  y: number;
  style: string;
  fill: string;
  gradient: Gradient;
  fillOpacity: number;
  class: string;
  verticalAlign: VerticalAlign;

  public static clone(from: CommonAttribute): CommonAttribute {
      const to: CommonAttribute = new CommonAttribute();
      CommonAttribute.copy(from, to);
      return to;
  }
  public static copy(from: CommonAttribute, to: CommonAttribute): void {
    to.width = from.width;
    to.widthUnit = from.widthUnit;
    to.height = from.height;
    to.heightUnit = from.heightUnit;
    to.x = from.x;
    to.y = from.y;
    to.style = from.style;
    to.fill = from.fill;
    to.gradient = from.gradient ? Gradient.clone(from.gradient) : null;
    to.fillOpacity = from.fillOpacity;
    to.class = from.class;
    to.verticalAlign = from.verticalAlign;
  }
}
