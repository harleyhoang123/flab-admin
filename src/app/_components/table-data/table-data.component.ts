import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  dataSource?: any;
  selectedId: any;
  @Input() displayedColumns?: any;
  @Input() data?: any;
  constructor() {}

  @ViewChild('paginator') paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  changeRow(id: any){
    this.selectedId = id;
    console.log(this.selectedId);
  }

}

