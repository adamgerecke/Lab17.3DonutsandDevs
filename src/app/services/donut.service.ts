import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut, DonutDetail } from '../interfaces/Donut'


@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http:HttpClient) { }
  

  getDonuts(){
    return this.http.get<Donut>('https://grandcircusco.github.io/demo-apis/donuts.json')
  }

  getDonut(url){
    return this.http.get<DonutDetail>(`https://grandcircusco.github.io/demo-apis/donuts/${url}.json`)
  }
}
