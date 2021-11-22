import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { PaymentDetails } from './paymentDetail';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {
sessionId :any;


  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.sessionId =this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:8090/api/payment/getPaymentDetails/"+this.sessionId).subscribe(data => {
      console.log(data);
    });
   }
   
  ngOnInit(): void {
  }

}
