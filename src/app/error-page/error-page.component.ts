import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //if errorMessage doesn't change when you are on the route
    //this.errorMessage = this.route.snapshot.data['message'];

    //if it might change.
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    })
  }

}
