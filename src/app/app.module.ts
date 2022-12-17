import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableDataComponent } from './_components/table-data/table-data.component';
import {MaterialComponentsModule} from "./_config/material-component.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor, JwtInterceptor} from "./_helpers";
import { SystemConfigComponent } from './system-config/system-config.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {ConfirmModalComponent} from "./_components";
import { SettingTableModalComponent } from './_components/setting-table-modal/setting-table-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashboardComponent,
    TableDataComponent,
    SystemConfigComponent,
    ConfirmModalComponent,
    SettingTableModalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        NgbModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
