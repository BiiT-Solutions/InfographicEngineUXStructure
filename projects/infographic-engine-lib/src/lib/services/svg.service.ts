import { Injectable } from '@angular/core';
import {InfographicEngineRootService} from "./infographic-engine-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  private static readonly ROOT_PATH: string = '/svg'
  constructor(private rootService: InfographicEngineRootService, private httpClient: HttpClient) { }

  getSvg(input: any): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create`, input);
  }
  getSvgFromDrools(input: any): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools`, input);
  }
  getSvgFromDroolsPlain(input: any): Observable<string> {
    return this.httpClient.post<string>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools/plain`, input);
  }
  getSvgPageFromDroolsPlain(input: any, page: number): Observable<string> {
    return this.httpClient.post<string>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools/plain/page/${page}`, input);
  }
  getPdf(forms: [{form:string, createdBy:string, version?:number, organization?:number}]): Observable<Blob> {
    return this.httpClient.post<Blob>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/find/latest/pdf`, forms,
      {
        responseType: 'blob' as 'json',
        observe: 'body',
        headers: {'Content-Type': 'application/json'}
      });
  }
}
