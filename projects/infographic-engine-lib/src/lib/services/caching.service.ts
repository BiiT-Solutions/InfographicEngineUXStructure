import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfographicEngineRootService} from "./infographic-engine-root.service";

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private static readonly ROOT_PATH: string = '/cache'
  constructor(private rootService: InfographicEngineRootService, private httpClient: HttpClient) { }

  clear(): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${CachingService.ROOT_PATH}`);
  }
}
