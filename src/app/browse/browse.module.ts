import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth/auth-guard';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowseRoutingModule
  ],
  exports: [
  ]
})
export class BrowseModule { }
