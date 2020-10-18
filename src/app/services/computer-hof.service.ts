import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject  } from '../interfaces/famous-people'

@Injectable({
  providedIn: 'root'
})
export class ComputerHOFService {

  constructor(private http:HttpClient) { }

  getFamousPersonDetail(){
    return this.http.get<RootObject>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
  }
}
