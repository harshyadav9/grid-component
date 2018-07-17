## This is a grid component  in Angular 6 and Bootrap 4  that includes the following features:

  ## Dynamic search functionality across all columns headers(page wise).
  ##  Dynamic pagination functionality based on items to be shown per page.
  ## Column based  ascending/descending sorting functionality acoss all columns.



## Getting Started
  
  Download the shopping cart folder and install the required packages and run the application.

  ## Installing
    > npm install

  ## Run server
    > ng serve

## Adding table grid component in your project.
// ...


## Grid Interface:
    export interface grid{
      first:string;
      last:string;
      age:number;
      gender:number;
  }

  This is a sample interface used in the component , it can be changed based on the type of data .


@Component({
  template: `
    <app-grid *ngIf="totalGridData" [disablePagination]="disableFlag" [itemsPerPage]="itemsPerPage" [totalData]="totalGridData"  ></app-grid>
  `
})
// ...

## OPTIONAL PARAMETERS:
  1) disablePagination:By default it is false and the pagination will be shown. if set to true pagination will not be shown
  

## There are few properties that needed to be declared in the parent component in which the grid component is to be used.
  1) itemsPerPage: This property tell the total items to be shown per page.it expects a number to be passed from the parent component.

  2) totalData:This property tell the total data to be shown in the grid and will be passed from parent component.it expects a array of objects(JSON).

##Style Directive:
    styleDirective:It is a property that can be added as an attribute that can be applied to rows and headers to give them color.  
    Usage:
       <tr  styleDirective ="grey" *ngFor="let pageRow of totalGridDataVal;let i  = index;">(Example)
