import {Background} from "./background";
import {CommonAttribute} from "./common-attribute";
import {ElementType} from "./elementType";
import {Border} from "./border";
import {LayoutType} from "./layout-type";

export class Element {
  background: Background;
  commonAttributes: CommonAttribute;
  elementType: ElementType;
  elements: Element[];
  href: string;
  id: string;
  stroke: Border;
  type: LayoutType;

  public static clone(from: Element): Element {
    const to: Element = new Element();
    Element.copy(from, to);
    return to;
  }
  public static copy(from: Element, to: Element): void {
    to.background = from.background ?  Background.clone(from.background) : null;
    to.commonAttributes = from.commonAttributes ? CommonAttribute.clone(from.commonAttributes) : null;
    to.elementType = from.elementType;
    to.elements = from.elements ? from.elements.map(Element.clone) : null;
    to.href = from.href;
    to.id = from.id;
    to.stroke = from.stroke ? Border.clone(from.stroke) : null;
    to.type = from.type;
  }
}
