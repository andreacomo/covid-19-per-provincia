import { Injectable } from '@angular/core';
import { parse } from 'papaparse';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {

  constructor() { }

  parse(file, options = {}) {
    return Observable.create(observer => {
      parse(file, {
        ...options,
        complete: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
    });
  }
}
