// address-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  address!: Address ;
  addressId!: number ;
  router: any;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addressId = this.route.snapshot.params['addressId'];
    this.address=new Address();
      this.addressService.getAddressById(this.addressId).subscribe(data => {
        this.address = data;
      })
    }
    goBack() {
      this.router.navigate(['/addresses']);
    }
  }

