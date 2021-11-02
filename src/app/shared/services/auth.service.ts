import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    console.log(environment.apiUrl);
    return this.httpClient.post('/api/user/signin.php', { 
      username, password 
    }, httpOptions);
  }

  register(first: string , last: string, username: string, email: string, password: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'user/register.php', { 
      first, last, username, email, password}, httpOptions);
  }
}
