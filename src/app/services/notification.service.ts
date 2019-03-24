import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification = new Subject<string>();
  public notification$ = this.notification.asObservable();

  constructor() { }

  public notify(message: string){
    this.notification.next(message);
  }

}
