##This is a grid component and includes the following:

-- This is a dynamic component that can be added anywhere.
-- Dynamic search functionality across all columns headers(page wise).
-- Dynamic pagination functionality based on items to be shown per page.
-- Column based  ascending/descending sorting functionality acoss all columns.



Usage:
// ...

@Component({
  template: `
    <app-grid *ngIf="totalGridData" [disablePagination]="disableFlag" [itemsPerPage]="itemsPerPage" [totalData]="totalGridData" [disablePagination]="false" ></app-grid>
  `
})
// ...

##OPTIONAL PARAMETERS:
  1) disablePagination:By default it is false and the pagination will be shown. if set to true pagination will not be shown
  

## There are few properties that needed to be declared in the parent component in which the grid component is to be
##used.
  1) itemsPerPage: This property tell the total items to be shown per page.it expects a number to be passed from the parent component.

  2) totalData:This property tell the total data to be shown in the grid and will be passed from parent component.it expects a array of objects(JSON).

##Style Directive:
    styleDirective:It is a property that can be added as an attribute that can be applied to rows and headers to give them color.  
    Usage:
       <tr  styleDirective ="grey" *ngFor="let pageRow of totalGridDataVal;let i  = index;">(Example)
