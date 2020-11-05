import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/UserDataService';
import { MatSnackBar } from '@angular/material';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {
  allocateForm:FormGroup;
  getRole= [];
  req_id: any;
  submitted = false;
  show=true;
  users:any=[];
  constructor(private fb1: FormBuilder,private router: Router,private actrouter: ActivatedRoute,public userDataService: UserDataService) {
    this.allocateForm = this.fb1.group({
      request_actionnnn: ['', Validators.required]
     
    });
  }
  goToUpgrade() {
    this.router.navigate(['/reqform']);
  }
  

  navigateTo() {
    console.log('Clicked');
  
    this.router.navigate(['/viewcomm']);
  
}
  
ngOnInit() {
  

  this.actrouter.params.subscribe(params => {
    this.req_id = +params['id'];
  });
  console.log(this.req_id,'RQID');


  this.userDataService.getusers(this.req_id).subscribe((data)=>{
    this.users=data;
  })
}
}
  
  


