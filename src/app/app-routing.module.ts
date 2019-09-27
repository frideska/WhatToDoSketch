import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { DetailsComponent } from './card-container/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/wtds', pathMatch: 'full' },
  { path: 'wtds', component: CardContainerComponent },
  { path: 'wtd:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
