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

  create(element: Element): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create`, element);
  }

  createDrools(input: any): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools`, input);
  }
  createDroolsPlain(input: any): Observable<string> {
    return this.httpClient.post<string>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools/plain`, input);
  }
  createFirstDroolsPlain(input: any): Observable<string> {
    return this.httpClient.post<string>(`${this.rootService.serverUrl}${SvgService.ROOT_PATH}/create/drools/plain/first`, input);
  }
}
