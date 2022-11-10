import { Component, MissingTranslationStrategy, OnInit, ViewChild } from '@angular/core';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types: Type[] = new Array;
  message: String = "";
  posicion: number = 0;
  modoalta: boolean = false;

  constructor(private _typeService: TypeServiceService) {
  }

  ngOnInit(): void {
    this._typeService.findAll().subscribe(data => {
      this.types = data

    })
  }

  remove(i: number) {
    this._typeService.delete_type_by_id(parseInt(this.types[i].id)).subscribe(resp => {
      this.message = "Type deleted Successfully";
      this.types.splice(i, 1);
    })
  }
}