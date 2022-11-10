import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  type: Type;
  editing: boolean = false;
  types: Type[] = new Array;
  aux: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private typeService: TypeServiceService) { this.type = new Type(); }

  ngOnInit(): void {
    this.loading();
  }

  loading() {
    this.activatedRoute.params.subscribe(
      t => {
        let id = t['id']; // We save the type's ID
        if (id) {
          this.typeService.findAll().subscribe(
            a => {
              this.aux = a
              for (let i = 0; i < this.aux.length; i++) { // We look for the type thanks to the ID
                if (this.aux[i].id == id) {
                  this.type = this.aux[i];
                }
              }
            });
        }
      }
    )
  }

  onSubmit() {
    this.typeService.save(this.type).subscribe(result => this.watchType());
  }

  watchType() {
    this.router.navigate(['/types']);
  }
}