import { Component, OnInit } from '@angular/core';
import { Plot } from 'src/app/models/plot';
import { PlotService } from 'src/app/services/plot.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  plot = new Plot();

  submitted = false;
  message: string;
  plots: Plot[];

 constructor(private plotDetailService:PlotService,private http: HttpClient,private location:Location) {}

 ngOnInit(): void {
   this.getPlotDetails();
    
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
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.plotDetailService.deletePlotDetail(id)
                    .subscribe(result =>{
                     this.message = "Customer deleted Successfully!"
                     // console.log(result);
                      this.getPlotDetails();
                    },  error => console.log(error));
                    
                               }
                             }
                       
              }
              
              
            
