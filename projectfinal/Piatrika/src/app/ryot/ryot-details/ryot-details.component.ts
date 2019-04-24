import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Ryot } from 'src/app/models/ryot';
import { RyotService } from 'src/app/services/ryot.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ryot-details',
  templateUrl: './ryot-details.component.html',
  styleUrls: ['./ryot-details.component.css']
})
export class RyotDetailsComponent implements OnInit {

  ryot = new Ryot();
  submitted = false;
  message: string;
  ryots:Ryot[];
  constructor(
    private ryotDetailService:RyotService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ryotDetailService.getRyotdetail(id)
      .subscribe(ryot => this.ryot = ryot);

  }
  getRyotDetails() {
    return this.ryotDetailService.getRyotDetails()
               .subscribe(
                 ryots => {
                  console.log(ryots);
                  this.ryots = ryots;
                 }
                );
 }
 update(): void {
   console.log(this.ryot);
  this.submitted = true;
  this.ryotDetailService.updateRyotDetail(this.ryot)
      .subscribe(result => this.message = "Ryot Updated Successfully!");
      this.getRyotDetails();
    this.location.back();

}

}
