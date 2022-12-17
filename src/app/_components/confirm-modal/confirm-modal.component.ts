import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
  providers: [MdbModalService]
})
export class ConfirmModalComponent implements OnInit {

  form!: FormGroup;
  constructor(public modalRef: MdbModalRef<ConfirmModalComponent>) { }

  ngOnInit(): void {
  }

  no(){
    this.modalRef.close("NO");
  }

  yes(){
    this.modalRef.close("YES");
  }
}
