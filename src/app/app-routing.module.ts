import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { PresidentialPredictionComponent } from './presidential-prediction/presidential-prediction.component';
import { ScoresComponent } from './scores/scores.component';
import { WorldSeriesComponent } from './world-series/world-series.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'browse', component: BrowseComponent},
    {path: 'presidentialprediction', component: PresidentialPredictionComponent},
    {path: 'scores', component: ScoresComponent},
    {path: 'worldseries', component: WorldSeriesComponent}
    ]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
