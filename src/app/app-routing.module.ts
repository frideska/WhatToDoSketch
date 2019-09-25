import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';


const routes: Routes = [
  { path: '', redirectTo: '/wtds', pathMatch: 'full' },
  { path: 'wtds', component: CardContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
