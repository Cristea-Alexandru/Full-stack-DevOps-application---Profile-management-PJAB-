import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.url = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public save(user: User) {
    return this.http.post<User>(this.url, user, { responseType: 'text' as 'json' });
  }

  public delete_user_by_id(id: number): Observable<number> {
    return this.http.delete<number>(this.url + "/delete_user/" + id);
  }
}