import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfographicEngineRootService} from './infographic-engine-root.service';
import {AuthService as AuthenticationService} from 'authorization-services-lib';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: InfographicEngineRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }

}
