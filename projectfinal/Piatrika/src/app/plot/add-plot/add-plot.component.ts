import { Component, OnInit } from '@angular/core';
import { Plot } from 'src/app/models/plot';
import { Router } from '@angular/router';
import { PlotService } from 'src/app/services/plot.service';

@Component({
  selector: 'app-add-plot',
  templateUrl: './add-plot.component.html',
  styleUrls: ['./add-plot.component.css']
})
export class AddPlotComponent implements OnInit {

  plot:Plot = new Plot();
  submitted = false;
  plots: Plot[];

   constructor(
    private plotDetailService:PlotService,
    private router:Router
  ) { }
ngOnInit(){
  
}

// PLOT DATA
  newPlot(): void {
    this.submitted = false;
    this.plot = new Plot();
  }

 addPlotdetail() {
   this.submitted = true;
   this.save();
 }

   private save(): void {
    console.log(this.plot);
    this.plotDetailService.addPlotDetail(this.plot)
        .subscribe();
        this.getPlotDetails();
        this.router.navigate(['/plots']);
      }

  getPlotDetails() {
    return this.plotDetailService.getPlotDetails()
               .subscribe(
                 plots => {
                  console.log(plots);
                  this.plots = plots
                 }
                );
 }


}



