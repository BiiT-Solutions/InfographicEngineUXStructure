export class Background {
  backgroundColor: string;
  image: string;
  xRadius: number;
  xradius: number;
  yRadius: number;
  yradius: number;

  public static clone(from: Background): Background {
    const to: Background = new Background();
    Background.copy(from, to);
    return to;
  }

  public static copy(from: Background, to: Background): void {
    to.backgroundColor = from.backgroundColor;
    to.image = from.image;
    to.xRadius = from.xRadius;
    to.xradius = from.xradius;
    to.yRadius = from.yRadius;
    to.yradius = from.yradius;
  }
}
