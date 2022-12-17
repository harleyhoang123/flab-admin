import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Response} from "../_models";
import {AccountService} from "./account.service";
import {PageableResponse} from "../_models/pageable-response";

import {Storage} from "./storage";


@Injectable({providedIn: 'root'})
export class DocumentService{


  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private storage: Storage
  ) {}

  getListDocument(){

  }

  getListPage(documentId: string){
    return this.http.get('http://localhost:3000/document/space').pipe(map(response => {
      return response;
    }))
  }

  getPageContent(pageId: string){
    return this.http.get("http://localhost:3000/document/page").pipe(map(response =>{
      return response;
    }));
  }

}
