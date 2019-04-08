import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from '../../services/config-options.service';
import { ConstantsService } from '../../services/constants.service';
import { GeneratorService } from '../../services/generator.service';
import { LocalStorageService } from '../../services/local-storage.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [ConfigOptionsService,
    ConstantsService,
    GeneratorService,
    LocalStorageService]
})
export class CoreModule { }
