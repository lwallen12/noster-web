import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresidentialPrediction } from '../models/presidential-prediction';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresidentialPredictionService {

  private currentActivePredSubject: BehaviorSubject<PresidentialPrediction>;
  public currentActivePrediction: Observable<PresidentialPrediction>;

  constructor(private http: HttpClient) {
    this.currentActivePredSubject = new BehaviorSubject<any>(this.getCurrentActive());
    this.currentActivePrediction = this.currentActivePredSubject.asObservable();
   }

  private urlGetActive = 'http://localhost:57096/api/presidentialpredictions/active';
  private urlPostPres = 'http://localhost:57096/api/presidentialpredictions';

  getCurrentActive(): Observable<PresidentialPrediction> {
    return this.http.get<PresidentialPrediction>(this.urlGetActive)
    .pipe(map(currentActive => 
      {
      this.currentActivePredSubject.next(currentActive)
      return currentActive;
      }
    ));
  }


  postPrediction(presPrediction: PresidentialPrediction): Observable<PresidentialPrediction>{
    return this.http.post<any>(this.urlPostPres, presPrediction)
    .pipe(
        //TODO: Anything? Error catching?
    )
  }

}
