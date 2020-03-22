import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Province } from 'src/app/commons/models/province';
import { ProvinceData } from '../models/province-data';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly BASE_PATH = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/';

  private readonly ALL_DATA = 'dpc-covid19-ita-province.json';

  private readonly LATEST_DATA = 'dpc-covid19-ita-province-latest.json';

  private latestDataCache$: Observable<ProvinceData[]>;

  private allDataCache$: Observable<ProvinceData[]>;

  constructor(private http: HttpClient) { }

  getDistricts(): Observable<string[]> {
    return this.getLatestData()
      .pipe(
        map(parsed => {
          return [... new Set((parsed as ProvinceData[]).map(d => d.denominazione_regione))] as string[];
        })
      );
  }

  getProvincesOf(district: string): Observable<Province[]> {
    return this.getLatestData()
      .pipe(
        map(parsed => {
          return (parsed as ProvinceData[])
            .filter(p => p.denominazione_regione === district && p.sigla_provincia)
            .map(d => {
              return {
                code: d.sigla_provincia,
                name: d.denominazione_provincia
              };
            });
        })
      );
  }

  getAllDataInDistrict(district: string) {
    return this.getAllData()
      .pipe(
        map(data => {
          return data
                    .filter(d => d.denominazione_regione === district)
                    .reduce((acc, i) => {
                      const group = acc[i.sigla_provincia] || [];
                      group.push(i);
                      acc[i.sigla_provincia] = group;
                      return acc;
                    }, {});
        })
      );
  }

  private getLatestData(): Observable<ProvinceData[]> {
    if (this.latestDataCache$ == null) {
      this.latestDataCache$ = this.http.get(this.BASE_PATH + this.LATEST_DATA)
          .pipe(
            publishReplay(1),
            refCount()
          ) as Observable<ProvinceData[]>;
    }
    return this.latestDataCache$;
  }

  private getAllData(): Observable<ProvinceData[]> {
    if (this.allDataCache$ == null) {
      this.allDataCache$ = this.http.get(this.BASE_PATH + this.ALL_DATA)
          .pipe(
            publishReplay(1),
            refCount()
          ) as Observable<ProvinceData[]>;
    }
    return this.allDataCache$;
  }
}
