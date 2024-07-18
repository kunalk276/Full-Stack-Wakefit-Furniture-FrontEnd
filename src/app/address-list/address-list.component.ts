// address-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses!: Address[];

  constructor(private addressService: AddressService, private router: Router) {}

  ngOnInit(): void {
    this.getAddress();
  }

  private getAddress() {
    this.addressService.getAddressList().subscribe(data => {
      this.addresses = data;
    });
  }

  AddressDetails(addressId: number) {
    this.router.navigate(['address-details', addressId]);
  }

  updateAddress(addressId: number) {
    this.router.navigate(['update-address', addressId]);
  }

  deleteAddress(addressId: number) {
    this.addressService.deleteAddress(addressId).subscribe(data =>{
      console.log(data);
      this.getAddress();
    })
  }
}
