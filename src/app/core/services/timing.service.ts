import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class TimingService {

    TimingInterceptor(startTime: number) {
        console.log('TimingInterceptor');
        return ((Date.now() - startTime) / 1000).toFixed(3);
    }
}
