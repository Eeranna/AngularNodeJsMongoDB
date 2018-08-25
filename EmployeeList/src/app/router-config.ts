import {HeaderComponent} from './header/header.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {HotelInfoComponent} from './hotel-info/hotel-info.component';
import {Routes} from '@angular/router';
import {AboutComponent} from './menulinks/about/about.component';
import {GovernanceComponent} from './menulinks/governance/governance.component';

export const appRoutes: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'employee', component: EmployeeListComponent},
  { path: 'hotel', component: HotelInfoComponent},

  { path: 'about', component: AboutComponent },
  { path: 'governance', component: GovernanceComponent }
];
