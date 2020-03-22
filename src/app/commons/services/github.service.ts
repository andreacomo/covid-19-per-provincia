import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { CsvParserService } from './csv-parser.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly BASE_PATH = 'https://api.github.com/repos/pcm-dpc/COVID-19/contents/dati-province';

  private readonly CONTENT_BASE_PATH = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-province';

  private readonly FILE_PREFIX = 'dpc-covid19-ita-province-';

  private readonly FILE_LATEST_SUFFIX = 'latest.csv';

  constructor(private http: HttpClient,
              private csv: CsvParserService) { }

  getData() {
    return this.http.get(this.BASE_PATH);
  }

  getDistricts() {
    return this.http.get(`${this.CONTENT_BASE_PATH}/${this.FILE_PREFIX}${this.FILE_LATEST_SUFFIX}`, {responseType: 'text'})
      .pipe(
        flatMap(csv => {
          return this.csv.parse(csv, {
            header: true
          });
        }),
        map(parsed => {
          return [... new Set((parsed as any).data.map(d => d.denominazione_regione))];
        })
      );
  }
}
