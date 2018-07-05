import { Component } from '@angular/core';
import { FilterService } from './grid/filter.service';
import { grid } from './grid/grid-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  totalGridData:grid[];
  itemsPerPage:number = 7;
  constructor(private dataService:FilterService){

  }
  ngOnInit(){
    
    this.dataService.getGridJSON<grid>().subscribe((data)=>{
      this.totalGridData = data;      
      console.log("this.totalGridData",this.totalGridData);
    });
  }
}


