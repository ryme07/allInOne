import { UserService } from './../../../services/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users!: User[];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(user => user.id === id);
    if (!user) return;
    user.isDeleting = true;
    this._userService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter(user => user.id !== id))
  }

}
