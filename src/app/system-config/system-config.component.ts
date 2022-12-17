import { Component, OnInit } from '@angular/core';
import {Employee} from "../_models/employee";
import {SettingTableModalComponent} from "../_components/setting-table-modal/setting-table-modal.component";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-system-config',
  templateUrl: './system-config.component.html',
  styleUrls: ['./system-config.component.css'],
  providers: [MdbModalService],
})
export class SystemConfigComponent implements OnInit {

  displayColumns: string[] = [];

  displayedColumnsDefault: string[] = [
    ' ',
    'Key',
    'Value',
    'Created By',
    'Created Date',
    'Last Modified By',
    'Last Modified Date',
  ];
  EmpData: Employee[] = [
    {
      id: 1,
      Key: 'Mellie',
      Value: 'Gabbott',
      "Created By": 'mgabbott0@indiatimes.com',
      "Created Date": 'Female',
      'Last Modified By': 'Support',
      'Last Modified Date': 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      Key: 'Yehudi',
      Value: 'Ainsby',
      "Created By": 'yainsby1@w3.org',
      "Created Date": 'Female',
      'Last Modified By': 'Support',
      'Last Modified Date': 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      Key: 'Noellyn',
      Value: 'Primett',
      "Created By": 'nprimett2@ning.com',
      "Created Date": 'Female',
      'Last Modified By': 'Human Resources',
      'Last Modified Date': 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      Key: 'Stefanie',
      Value: 'Yurenin',
      "Created By": 'syurenin3@boston.com',
      "Created Date": 'Female',
      'Last Modified By': 'Marketing',
      'Last Modified Date': 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      Key: 'Stormi',
      Value: "O'Lunny",
      "Created By": 'solunny4@patch.com',
      "Created Date": 'Female',
      'Last Modified By': 'Engineering',
      'Last Modified Date': 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      Key: 'Keelia',
      Value: 'Giraudy',
      "Created By": 'kgiraudy5@nba.com',
      "Created Date": 'Male',
      'Last Modified By': 'Marketing',
      'Last Modified Date': 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      Key: 'Ikey',
      Value: 'Laight',
      "Created By": 'ilaight6@wiley.com',
      "Created Date": 'Male',
      'Last Modified By': 'Support',
      'Last Modified Date': 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      Key: 'Adrianna',
      Value: 'Ruddom',
      "Created By": 'aruddom7@seattletimes.com',
      "Created Date": 'Male',
      'Last Modified By': 'Marketing',
      'Last Modified Date': 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      Key: 'Dionysus',
      Value: 'McCory',
      "Created By": 'dmccory8@ox.ac.uk',
      "Created Date": 'Male',
      'Last Modified By': 'Engineering',
      'Last Modified Date': 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      Key: 'Claybourne',
      Value: 'Shellard',
      "Created By": 'cshellard9@rediff.com',
      "Created Date": 'Male',
      "Last Modified By": 'Engineering',
      "Last Modified Date": 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  modalRef: MdbModalRef<SettingTableModalComponent> | null = null;
  constructor(
    private modalService: MdbModalService
  ) { }

  ngOnInit(): void {
    this.displayColumns = this.displayedColumnsDefault;
  }

  openSettingModal(){
    this.modalService.open(SettingTableModalComponent, {data: {columns: this.displayColumns}});
  }
}
