import {Injectable} from '@angular/core';
import {InfographicEngineRootService} from "./infographic-engine-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {GeneratedInfographic} from "../models/generated-infographic";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfographicService {

  private static readonly ROOT_PATH: string = '/infographic'

  constructor(private rootService: InfographicEngineRootService, private httpClient: HttpClient) {
  }

  getAll(): Observable<GeneratedInfographic[]> {
    return this.httpClient.get<GeneratedInfographic[]>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}`);
  }

  getById(id: number): Observable<GeneratedInfographic> {
    return this.httpClient.get<GeneratedInfographic>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/${id}`);
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/count`);
  }

  find(
    form?: string,
    version?: number,
    createdBy?: string,
    organization?: number,
    from?: Date,
    to?: Date
  ): Observable<GeneratedInfographic[]> {
    let httpParams: HttpParams = new HttpParams();
    if (form) {
      httpParams = httpParams.append('form', form);
    }
    if (version) {
      httpParams = httpParams.append('version', version.toString());
    }
    if (createdBy) {
      httpParams = httpParams.append('createdBy', createdBy);
    }
    if (organization) {
      httpParams = httpParams.append('organization', organization.toString());
    }
    if (from) {
      httpParams = httpParams.append('from', from.toISOString());
    }
    if (to) {
      httpParams = httpParams.append('to', to.toISOString());
    }
    return this.httpClient.get<GeneratedInfographic[]>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/find`, {params: httpParams});
  }

  findLatest(
    form?: string,
    version?: number,
    createdBy?: string,
    organization?: number,
  ): Observable<GeneratedInfographic> {
    let httpParams: HttpParams = new HttpParams();
    if (form) {
      httpParams = httpParams.append('form', form);
    }
    if (version) {
      httpParams = httpParams.append('version', version.toString());
    }
    if (createdBy) {
      httpParams = httpParams.append('createdBy', createdBy);
    }
    if (organization) {
      httpParams = httpParams.append('organization', organization.toString());
    }
    return this.httpClient.get<GeneratedInfographic>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/find/latest`, {params: httpParams});
  }

  range(from: Date, to: Date): Observable<GeneratedInfographic[]> {
    const httpParams: HttpParams = new HttpParams();
    httpParams.append('from', from.toISOString());
    httpParams.append('to', to.toISOString());
    return this.httpClient.get<GeneratedInfographic[]>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/range`, {params: httpParams});
  }

  getAllCreated(): Observable<GeneratedInfographic[]> {
    return this.httpClient.get<GeneratedInfographic[]>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/users`);
  }

  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/users/count`);
  }

  getAllCreatedByUser(username: string): Observable<GeneratedInfographic[]> {
    return this.httpClient.get<GeneratedInfographic[]>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/users/${username}`);
  }

  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${InfographicService.ROOT_PATH}/users/${username}/count`);
  }
}
