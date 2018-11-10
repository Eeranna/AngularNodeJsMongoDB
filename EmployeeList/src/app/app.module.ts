import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {appRoutes} from './router-config';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './menulinks/about/about.component';
import {GovernanceComponent} from './menulinks/governance/governance.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ZomatoComponent } from './zomato/zomato.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HotelInfoComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    GovernanceComponent,
    ZomatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
