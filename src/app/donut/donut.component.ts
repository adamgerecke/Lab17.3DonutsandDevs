import { Component, OnInit, Input } from '@angular/core';
import { Donut } from '../interfaces/Donut'
import { DonutService } from '../services/donut.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  
  donutList: Donut;
  

  constructor(private donutservice : DonutService) { }
 

  ngOnInit(): void {
    this.donutservice.getDonuts().subscribe(
      (data:Donut)=>
      this.donutList = data

    )
  }


}
