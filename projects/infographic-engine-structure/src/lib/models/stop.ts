import {ElementType} from "./elementType";

export class Stop {
  color: string;
  elementType: ElementType;
  id: string;
  offset: number;
  opacity: number;

  public static clone(from: Stop): Stop {
      const to: Stop = new Stop();
      Stop.copy(from, to);
      return to;
  }
  public static copy(from: Stop, to: Stop): void {
      to.color = from.color;
      to.elementType = from.elementType;
      to.id = from.id;
      to.offset = from.offset;
      to.opacity = from.opacity;
  }
}
