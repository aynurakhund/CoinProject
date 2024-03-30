import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get('http://localhost:3000/'); //This api is Local api. So it's useful only in my computer)
  }
}
