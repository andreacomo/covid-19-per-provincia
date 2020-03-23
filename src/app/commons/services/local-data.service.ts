import { Injectable } from '@angular/core';
import milestones from '../../data/milestones.json';
import { Milestone } from '../models/milestone';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  getMilestones(): Observable<Milestone[]> {
    return of(milestones as Milestone[]);
  }
}
