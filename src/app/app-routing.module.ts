import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternaComponent } from './Components/interna/interna.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'details/:weatherById.id', component: InternaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
