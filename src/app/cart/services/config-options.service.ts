import { Injectable } from '@angular/core';
import { ConfigModel } from '../../product/models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  config: ConfigModel;
  loginCollection: [] = [];

  constructor() { }

  setConfig(config: ConfigModel){
    this.config = config;
  }

  getConfig(id: number){
    return this.config;
  }
}
