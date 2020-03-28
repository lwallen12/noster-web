import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { RouterModule } from '@angular/router';

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
