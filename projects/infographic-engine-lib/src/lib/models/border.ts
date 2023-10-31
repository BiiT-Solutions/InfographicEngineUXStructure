import {StrokeLine} from "./stroke-line";

export class Border {
  strokeWidth: number;
  strokeColor: string;
  strokeOpacity: number;
  strokeDash: number[];
  strokeLinecap: StrokeLine;

  public static clone(from: Border): Border {
    const to: Border = new Border();
    Border.copy(from, to);
    return to;
  }

  public static copy(from: Border, to: Border): void {
    to.strokeWidth = from.strokeWidth;
    to.strokeColor = from.strokeColor;
    to.strokeOpacity = from.strokeOpacity;
    to.strokeDash = from.strokeDash;
    to.strokeLinecap = from.strokeLinecap;
  }
}
