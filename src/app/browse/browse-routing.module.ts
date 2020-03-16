import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth/auth-guard';



const froutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
        {path: 'browse', component: BrowseComponent}
    ]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(froutes)],
    exports: [RouterModule]
  })
  export class BrowseRoutingModule { }