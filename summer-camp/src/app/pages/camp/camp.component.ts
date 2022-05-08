import { Component, OnInit } from '@angular/core';
import { Camp } from "./Camp";
import { CampService } from "../../shared/services/camp.service";


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  camps: Array<Camp> = {} as Array<Camp>

  constructor(private campService: CampService) { }

  ngOnInit(): void {
    this.campService.loadCampData().subscribe((data: Array<Camp>) => {
      console.log(data);
      this.camps = data;
    })
    console.log(this.camps);
  }

}
