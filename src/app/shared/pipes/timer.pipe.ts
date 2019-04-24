import { PipeTransform, Pipe } from '@angular/core';
import { TimingService } from '../../core/services/timing.service';

@Pipe({name: 'timerPipe'})
export class TimerPipe implements PipeTransform {

    constructor(private timer: TimingService) { }

    transform(value: any, request: string): any {
        const startTime = Date.now();
        this.timer.TimingInterceptor(startTime, request);
        return value;
    }
}
