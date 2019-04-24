import { Component, OnInit } from '@angular/core';
import { Plot } from 'src/app/models/plot';
import { PlotService } from 'src/app/services/plot.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.css']
})
export class PlotDetailComponent implements OnInit {

 
 
  plot = new Plot();
  submitted = false;
  message: string;
  plots:Plot[];
  constructor(
    private plotDetailService:PlotService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plotDetailService.getPlotdetail(id)
      .subscribe(plot => this.plot = plot);

  }
  getPlotDetails() {
    return this.plotDetailService.getPlotDetails()
               .subscribe(
                 plots => {
                  console.log(plots);
                  this.plots = plots;
                 }
                );
 }
 update(): void {
   console.log(this.plot);
  this.submitted = true;
  this.plotDetailService.updatePlotDetail(this.plot)
      .subscribe(result => this.message = "Plot Updated Successfully!");
      this.getPlotDetails();
    this.location.back();

}

}