import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingComunicationService {

  // variable capable to receiving and sending data
  sendMessage = new BehaviorSubject<any>(100);
  constructor() { }
  // calling this methode in case of sending data
  communicateMessage(detail:Object){
       this.sendMessage.next(detail);
  }
}
