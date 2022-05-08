import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampComponent } from './camp.component';

const routes: Routes = [
  { path: '', component: CampComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampRoutingModule { }
