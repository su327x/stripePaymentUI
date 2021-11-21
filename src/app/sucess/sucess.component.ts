import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {
sessionId :any;
stripe  :any;
stripePromise = loadStripe(environment.stripe);
  constructor(private route: ActivatedRoute) {
    this.sessionId =this.route.snapshot.paramMap.get('id');
   
   }
   
  ngOnInit(): void {
  }

}
