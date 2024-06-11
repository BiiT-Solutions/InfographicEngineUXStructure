import {ElementDto} from "authorization-services-lib";

export class GeneratedInfographic extends ElementDto {
  override id: number;
  formName: string;
  formVersion: number;
  organizationId: string;
  svgContents: string[];

  public static override clone(from: GeneratedInfographic): GeneratedInfographic {
    const to: GeneratedInfographic = new GeneratedInfographic();
    GeneratedInfographic.copy(from, to);
    return to;
  }

  public static override copy(from: GeneratedInfographic, to: GeneratedInfographic) {
    super.copy(from, to);
    to.id = from.id;
    to.formName = from.formName;
    to.formVersion = from.formVersion;
    to.organizationId = from.organizationId;
    to.svgContents = new Array(...from.svgContents);
  }
}
