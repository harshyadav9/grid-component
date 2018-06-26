import { Component, OnInit, Input, AfterViewChecked, OnChanges } from '@angular/core';
import { grid } from './grid-model';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  pages:number[]=[];
  headers:string[]=[];
  pagesLength:number;
  previousDisabled:boolean = true;
  nextDisabled:boolean = false;
  currentPage:number = 1;
  searchText:string;
  tableData:grid[] = [];
  totalGridData:grid[] = [];
  totalGridDataVal:grid[] = [];
  arrowUp:boolean = false;
  arrowDown:boolean = false;
  initalColor:boolean=true;
  name="first"
  // header
  constructor(private filterService:FilterService) { }


  @Input('totalData') totalData:grid[] = [];
  @Input('itemsPerPage') itemsEachPage:number;
  @Input('headers') headerData:string[];
  @Input('disablePagination') disableFlag:boolean;
  ngOnInit() {

    this.calculateTotalPages();
      this.totalGridDataVal = this.totalData; 
      this.calculateData();
    // this.headers = ["first","last","age"];   
    console.log("this.headers",this.headerData);
  }


  calculateData(){
    if(this.currentPage == 1)
      this.totalGridDataVal = this.totalData.slice(0,this.itemsEachPage);
    else
    {
      let toPage = this.currentPage * this.itemsEachPage;
      let fromPage = toPage - this.itemsEachPage;
      this.totalGridDataVal =  this.totalData.slice(fromPage,toPage);
      
    }
    this.tableData = this.totalGridDataVal;
  }

    filter(){
      this.totalGridDataVal = this.filterService.filterData(this.tableData,this.searchText,this.headerData);
      
      console.log("this.tableData",this.tableData);
    }
    
  

  // populate the pages array that will show the pagination
  calculateTotalPages(){
      this.pagesLength = Math.ceil(this.totalData.length/this.itemsEachPage);
      for(let i=1;i<=this.pagesLength;i++)
      {
        this.pages.push(i);
      }
      if(this.pages.length == 1)
      {
        this.previousDisabled = true;
        this.nextDisabled = true;
      }
  }

  // sorting
  sort(direction,prop:string){
    this.totalGridDataVal = this.filterService.sortData(this.totalGridDataVal,direction,prop);
     this.arrowUp = direction == -1 ? true : false;
     this.arrowDown = direction == 1 ? true : false;
     this.initalColor=false;
  }
  
 
  // Click of next button
  nextPage(){
    let tempNo:number;
    tempNo = this.currentPage;
    if(this.currentPage < this.pagesLength)
      tempNo+=1;
    this.changePage(tempNo);
  }


  // Click of previous button
  previousPage(){
    let tempNo:number 
    tempNo = this.currentPage;
    if(this.currentPage > 1 )
      tempNo-=1;
    this.changePage(tempNo);
  }

  

  changePage(pageNo:number){
    console.log(pageNo);
    if(pageNo === this.currentPage)
      return;
    this.searchText = "";
    this.arrowUp = false;
    this.arrowDown = false;
    this.currentPage = pageNo;    
    this.previousDisabled = this.currentPage > 1 ? false:true;
    this.nextDisabled = this.currentPage < this.pagesLength ? false:true;
    this.calculateData();
  }

}
