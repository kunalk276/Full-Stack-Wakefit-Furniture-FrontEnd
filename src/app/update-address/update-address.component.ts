import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})

export class UpdateAddressComponent implements OnInit {
updateAddress() {
throw new Error('Method not implemented.');
}



  addressId!: number ;
  address: Address = new Address();
  
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void 
  {
    this.addressId = this.route.snapshot.params['addressId'];

      this.addressService.getAddressById(this.addressId).subscribe(data => {
        this.address = data;
      },error=>console.log(error));
    
  }

  onSubmit() {
    this.addressService.updateAddress(this.address.addressId, this.address).subscribe(data => {
      console.log(data);
      this.router.navigate(['/addresses']);
    }, error => console.log(error));
      
    
  }
  goToAddressList() {
    this.router.navigate(['/addresses']);
  }

  }
  

