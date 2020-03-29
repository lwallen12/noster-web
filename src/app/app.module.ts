import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { ScoresComponent } from './scores/scores.component';
import { PresidentialPredictionComponent } from './presidential-prediction/presidential-prediction.component';
import { WorldSeriesComponent } from './world-series/world-series.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { MomentModule } from 'angular2-moment';
import { IdleComponent } from './modals/idle.component';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { LoadingComponent } from './modals/loading.component';
import { BrowseModule } from './browse/browse.module';
import { ResetComponent } from './auth/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    ScoresComponent,
    PresidentialPredictionComponent,
    WorldSeriesComponent,
    AuthComponent,
    IdleComponent,
    LoadingComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    BrowseModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
