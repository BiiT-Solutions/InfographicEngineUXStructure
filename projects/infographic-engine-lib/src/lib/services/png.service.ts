import { Injectable } from '@angular/core';
import {InfographicEngineRootService} from "./infographic-engine-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PngService {

  private static readonly ROOT_PATH: string = '/png'
  constructor(private rootService: InfographicEngineRootService, private httpClient: HttpClient) { }

  create(element: Element): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${PngService.ROOT_PATH}/create`, element);
  }
}
