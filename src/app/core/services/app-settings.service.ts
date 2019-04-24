import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { LocalStorageService } from './local-storage.service';
import { RequestModel } from '../models/request-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: CoreModule
  })
  export class AppSettingsService {
      settings: Array<RequestModel> = [];

      constructor(
        private http: HttpClient,
        private localStogareService: LocalStorageService) { }

      loadSettings() {
          const requests = this.localStogareService.getFromLocalStorage('appSettings');
          if (requests) {
            this.settings = requests;
          } else {
            this.getJSON();
            this.localStogareService.saveToLocalStorage('appSettings', this.settings);
          }
      }

        private getJSON() {
            return this.http.get('.assets/app-settings.json')
                .subscribe((res: Array<RequestModel>) => {
                    this.localStogareService.saveToLocalStorage('appSettings', res['requests']);
                }, () => this.getDefaultSettings());
            }

        private getDefaultSettings() {
            console.log('failed to find app-settings.json, loaded default settings');
            this.settings = new Array<RequestModel>(
                new RequestModel('Get products admin request')
            );
            this.localStogareService.saveToLocalStorage('appSettings', this.settings);
        }
}
