import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {  }
  addUser(username: string) {
    this.users$.value.push(username);
  }
}
