import { Component, Input, OnInit } from '@angular/core';
import { Donut, DonutDetail } from '../interfaces/donut'
import { DonutService } from '../services/donut.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  donutInfo : DonutDetail;
 // @Input() url:string;
  
  
  
  constructor(private route: ActivatedRoute, private donutsService: DonutService) { }
  //url2 : string = 'https://grandcircusco.github.io/demo-apis/donuts/1.json'; //HARD CODED URL NEED TO PASS THE CLICKED ONE PICKED UP IN LINE 14

  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.donutsService.getDonut(id).subscribe(
      (data: DonutDetail) =>
      this.donutInfo = data
    );
  }

}
