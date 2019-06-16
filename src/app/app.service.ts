import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendJson():Observable<any> {
    return this.http.get('../assets/food-json/food.json');
  }

  private showTask = new BehaviorSubject<any>([]);
          showBehaviour = this.showTask.asObservable();
          changesBehaviour(data: any) {
          this.showTask.next(data)
    }
}
