import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampRoutingModule } from "./camp-routing.module";
import { CampComponent } from "./camp.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    CampComponent
  ],
  imports: [
    CommonModule,
    CampRoutingModule,
    MatCardModule,
    FlexLayoutModule,
  ]
})
export class CampModule { }
