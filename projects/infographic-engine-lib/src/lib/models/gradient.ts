import {ElementType} from "./elementType";
import {Stop} from "./stop";

export class Gradient {
  elementType: ElementType;
  id: string;
  stops: Stop[];
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  public static clone(from: Gradient): Gradient {
    const to: Gradient = new Gradient();
    Gradient.copy(from, to);
    return to;
  }
  public static copy(from: Gradient, to: Gradient): void {
    to.elementType = from.elementType;
    to.id = from.id;
    to.stops = from.stops ? from.stops.map(Stop.clone) : null;
    to.x1 = from.x1;
    to.y1 = from.y1;
    to.x2 = from.x2;
    to.y2 = from.y2;
  }
}
