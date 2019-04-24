import { NgModule } from '@angular/core';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
  TimerPipe
  ],
  exports: [
    TimerPipe
  ]
})

export class SharedModule { }
