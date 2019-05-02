import {Injectable} from '@angular/core';
import { HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpParams,
    HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RequestTimeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Entered RequestTimeInterceptor');
    let clonedRequest;
    let start;
    if (req.url.includes('product')) {
      start = Date.now();
      clonedRequest = req.clone({
      params: new HttpParams()
        .set('ts_interceptor', Date.now().toString())
      });

    return next.handle(clonedRequest)
      .pipe(
          map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              if (event.url.includes('product')) {
                  console.log(`${req.method} ${req.url}  took ${((Date.now() - start) / 1000).toFixed(3)} s`);
              }
              return event;
          }
          })
      );
    } else {
      clonedRequest = req;
    }

  return next.handle(clonedRequest);
  }
}
