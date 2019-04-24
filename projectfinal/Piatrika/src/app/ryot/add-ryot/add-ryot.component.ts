import { Component, OnInit } from '@angular/core';
import { Ryot } from 'src/app/models/ryot';
import { Router } from '@angular/router';
import { RyotService } from 'src/app/services/ryot.service';

@Component({
  selector: 'app-add-ryot',
  templateUrl: './add-ryot.component.html',
  styleUrls: ['./add-ryot.component.css']
})
export class AddRyotComponent implements OnInit {
  ryot: Ryot = new Ryot();
  submitted = false;
  ryots: Ryot[];

  constructor(
    private ryotDetailService: RyotService,
    private router: Router
  ) { }
  ngOnInit() {

  }
  // RYOT DATA
  newRyot(): void {
    this.submitted = false;
    this.ryot = new Ryot();
  }

  addRyotDetail() {
    this.submitted = true;
    this.saveRyot();
    //  console.log(this.ryot);
    //  this.ryotDetailService.addRyotDetail(this.ryot)
    //      .subscribe();
    //      this.getRyotDetails();
    //      this.router.navigate(['/masterdetail'])
  }

  saveRyot(): void {
    console.log(this.ryot);
    this.ryotDetailService.addRyotDetail(this.ryot)
      .subscribe();
    this.getRyotDetails();
    this.router.navigate(['/ryots']);
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

}
