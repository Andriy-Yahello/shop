import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const Get_Rand = new InjectionToken<any[]>('GetRand');

export function GenerateFactory(langth: number){
    return function(data: GeneratorService):  any{
        return data.generate(langth);
    }
}