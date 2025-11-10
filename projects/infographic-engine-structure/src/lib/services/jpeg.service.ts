import { Injectable } from '@angular/core';
import {InfographicEngineRootService} from "./infographic-engine-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JpegService {

  private static readonly ROOT_PATH: string = '/jpeg'
  constructor(private rootService: InfographicEngineRootService, private httpClient: HttpClient) { }

  create(element: Element): Observable<string[]> {
    return this.httpClient.post<string[]>(`${this.rootService.serverUrl}${JpegService.ROOT_PATH}/create`, element);
  }
}
