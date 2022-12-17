import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MdbModalRef} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-setting-table-modal',
  templateUrl: './setting-table-modal.component.html',
  styleUrls: ['./setting-table-modal.component.css']
})
export class SettingTableModalComponent implements OnInit {

  form!: FormGroup;
  @Input() columns: any;

  localDateTime = "2022-12-16 09:20:48 237";
  constructor(public modalRef: MdbModalRef<SettingTableModalComponent>) { }

  ngOnInit(): void {
    this.columns = this.columns?.filter((v: string) => v !== ' ')
  }

}
