import { Component, OnInit } from '@angular/core';
import { FareFamilyShopService } from '../services/fare-family-shop.service';
import { FareFamilyOffering, Product, Flight } from '../assets/ffsmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // ffsOfferingList: FareFamilyOffering[] = [];

  ffshop: any;
  ffshopOfferings: object[];
  ReferenceList: object[];

  constructor(public ffsService: FareFamilyShopService) {}

  ngOnInit() {
    this.ffsService.getJSON().subscribe(data => {
      this.ffshop = data;
      // console.log(this.ffshop);
      this.fillShopOfferings();
    });
  }

  fillShopOfferings() {
    if (this.ffshop !== null ) {
      this.ffshopOfferings = this.ffshop.FareFamilyOfferingsResponse.FareFamilyOfferings;
      // console.log(JSON.stringify(this.ffshopOfferings));
      this.ReferenceList = this.ffshop.FareFamilyOfferingsResponse.ReferenceList;
      // console.log(JSON.stringify(this.ReferenceList));

  
    }
  }



}
