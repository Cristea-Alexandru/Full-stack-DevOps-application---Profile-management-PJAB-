import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { TypeServiceService } from '../type-service.service';
import { Type } from '../type';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  types: string[] = new Array;
  i: number = 0;
  aux: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserServiceService, private _typeService: TypeServiceService) { this.user = new User(); }

  ngOnInit(): void {
    this._typeService.findAll().subscribe(data => {

      for (this.i = 0; this.i < data.length; this.i++) {
        this.types[this.i] = data[this.i].type
      }

    });
    this.loading();
  }

  loading() {
    this.activatedRoute.params.subscribe(
      t => {
        let id = t['id'];
        if (id) {
          this.userService.findAll().subscribe(
            a => {
              this.aux = a
              for (let i = 0; i < this.aux.length; i++) {
                if (this.aux[i].id == id) {
                  this.user = this.aux[i];
                }
              }
            });
        }
      }
    )
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.watchUser());
  }

  watchUser() {
    this.router.navigate(['/users']);
  }
}