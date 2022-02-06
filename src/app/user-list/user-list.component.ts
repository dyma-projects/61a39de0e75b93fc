import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {element} from 'protractor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];
  public subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-shadowed-variable
    this.subscription = this.userService.users$.subscribe((element: string[]) => {
      this.users = element;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
