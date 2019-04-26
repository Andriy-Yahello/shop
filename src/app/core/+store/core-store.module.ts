import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducers, RouterStateSerializerProvider, RouterEffects  } from './router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    RouterStateSerializerProvider
  ]
})
export class CoreStoreModule { }
