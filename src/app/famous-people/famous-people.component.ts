import { Component, OnInit } from '@angular/core';
import { RootObject } from '../interfaces/famous-people';
import { ComputerHOFService } from '../services/computer-hof.service';
import { ActivatedRoute } from '@angular/router';
import { FamousPersonDetailComponent } from '../famous-person-detail/famous-person-detail.component';


@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  
  DevInfo : RootObject;
  
 
  constructor(private famouspeopleservice : ComputerHOFService) { }
    
  
  ngOnInit(): void {
    this.famouspeopleservice.getFamousPersonDetail().subscribe(
      (data:RootObject)=>
      this.DevInfo = data

    )
  }
}