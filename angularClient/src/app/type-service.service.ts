import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  private url: string;
  get: any;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/types";
  }

  public findAll(): Observable<Type[]> {
    return this.http.get<Type[]>(this.url);
  }

  public save(type: Type) {
    return this.http.post<Type>(this.url, type, { responseType: 'text' as 'json' });
  }

  public delete_type_by_id(id: number): Observable<number> {
    return this.http.delete<number>(this.url + "/delete_type/" + id);
  }

  public edit(id: number) {
    return this.http.put(this.url + "/edit_type/" + id, id);
  }
}