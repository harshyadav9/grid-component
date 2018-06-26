This is a grid component and includes the following:

-- This is a dynamic component that can be added anywhere.
-- Dynamic search functionality across all columns headers.
-- Dynamic pagination functionality based on items to be shown per page.
-- Column based  ascending/descending sorting functionality acoss all columns.


Usage:
// ...

@Component({
  template: `
    <app-grid *ngIf="totalGridData" [disablePagination]="disableFlag" [itemsPerPage]="itemsPerPage" [totalData]="totalGridData" [headers]="['First','Last','Age']" ></app-grid>
  `
})
// ...

-- There are few properties that needed to be declared in the parent component in which the grid compoent is to be
used.
1) itemsPerPage: This property tell the total items to be shown per page. this is fully dynamic and can be passed as wish by the user.

2) totalData:This property tell the total data to be shown in the grid and will be passed from parent component.
3) headers:This columsn names has to be passed as an array in the headers property.