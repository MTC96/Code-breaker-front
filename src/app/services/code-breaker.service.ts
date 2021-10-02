import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerService {

  constructor(private http: HttpClient) { }

  guessCode(code: string) {
    const url = `http://localhost:3000/try/p?input=${code}`;
    console.log(url);
    return this.http.get(url);
  }

  resetCode() {
    const url = `http://localhost:3000/new-number/p?digits=4`;
    return this.http.get(url);
  }
}
