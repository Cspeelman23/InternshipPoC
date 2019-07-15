import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { FareFamilyOffering } from '../assets/ffsmodel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FareFamilyShopService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get<any>('../assets/FFSResponse.json');
  }
}
