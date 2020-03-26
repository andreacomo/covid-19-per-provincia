import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DistrictData } from '../models/district-data';
import { ProvinceData } from '../models/province-data';
import { HttpClient } from '@angular/common/http';
import { publishReplay, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  private latestDataCache$: Map<string, Observable<ProvinceData[] | DistrictData[]>>
            = new Map<string, Observable<ProvinceData[] | DistrictData[]>>();

  private allDataCache$: Map<string, Observable<ProvinceData[] | DistrictData[]>>
            = new Map<string, Observable<ProvinceData[] | DistrictData[]>>();

  constructor(private http: HttpClient) { }

  public getLatestData<T>(url: string): Observable<T[]> {
    if (this.latestDataCache$[url] == null) {
      this.latestDataCache$[url] = this.http.get(url)
          .pipe(
            publishReplay(1),
            refCount()
          ) as Observable<T[]>;
    }
    return this.latestDataCache$[url];
  }

  public getAllData<T>(url: string): Observable<T[]> {
    if (this.allDataCache$[url] == null) {
      this.allDataCache$[url] = this.http.get(url)
          .pipe(
            publishReplay(1),
            refCount()
          ) as Observable<T[]>;
    }
    return this.allDataCache$[url];
  }
}
