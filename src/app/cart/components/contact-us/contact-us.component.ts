import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { AppModel } from '../../../product/models/app-model';
import { Get_Rand, GenerateFactory } from '../../services/random-n.factory';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [
    GeneratorService,
    { provide: AppModel, useValue: new AppModel('TaskManager', '1.0') },
    { provide: Get_Rand, useFactory: GenerateFactory(10), deps: [GeneratorService] }
  ]
})
export class ContactUsComponent implements OnInit {
  content: string;

  constructor(
    @Inject(AppModel) public appModel: AppModel,
    @Optional() private localStorageService: LocalStorageService,
    @Inject(Get_Rand) private getString: any) {
   }

  ngOnInit() {
    this.content = `Random String: ${this.getString}`;
  }
}
