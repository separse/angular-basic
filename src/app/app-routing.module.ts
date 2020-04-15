import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component: HomeComponent},
{path:'setting',
component: SettingComponent,
children: [
    {path:'', redirectTo: 'detail', pathMatch: 'full'},
    {path:'detail', component: SettingDetailComponent},
    {path:'contact', component: ContactComponent},
    {path:'**', redirectTo: 'detail', pathMatch: 'full'}
]},
{path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
