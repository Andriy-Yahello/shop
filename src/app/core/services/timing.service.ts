import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { AppSettingsService } from './app-settings.service';
import { RequestModel } from '../models/request-model';

@Injectable({
  providedIn: CoreModule
})
export class TimingService {
    requests: Array<RequestModel> = [];

    constructor(private appSettingsService: AppSettingsService) {
    }

    TimingInterceptor(startTime: number, request: string) {
      if (this.requests.length === 0) {
        this.appSettingsService.loadSettings();
        this.requests = this.appSettingsService.settings;
      }

      const filtered = this.requests.find(r => r.id === request);
      if (filtered !== undefined) {
        console.log('TimingInterceptor');
        console.log(`${request} took: ${((Date.now() - startTime) / 1000).toFixed(3)} s`);
      }
    }
}
