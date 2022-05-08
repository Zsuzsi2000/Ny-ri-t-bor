import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { MatGridListModule } from "@angular/material/grid-list";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatGridListModule
  ]
})
export class MainModule { }
