import { Component, OnInit } from '@angular/core';
import { Ryot } from 'src/app/models/ryot';
import { RyotService } from 'src/app/services/ryot.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ryot',
  templateUrl: './ryot.component.html',
  styleUrls: ['./ryot.component.css']
})
export class RyotComponent implements OnInit {

  ryot=new Ryot();
  submitted = false;
  message: string;
  ryots: Ryot[];

 constructor(private ryotDetailService:RyotService,private http: HttpClient) {}

 ngOnInit(): void {
   this.getRyotDetails();
    
 }

 getRyotDetails() {
   return this.ryotDetailService.getRyotDetails()
              .subscribe(
                ryots => {
                 console.log(ryots);
                 this.ryots = ryots
                }
               );
              }
              delete(id:number) {
                this.submitted = true;
                let r = confirm("Are you sure you want to delete...?");
                if (r == true) {
                this.ryotDetailService.deleteRyotDetail(id)
                    .subscribe(result =>{
                     this.message = "Customer deleted Successfully!"
                     // console.log(result);
                      this.getRyotDetails();
                    },  error => console.log(error));
                    
                               }
                             }

}




