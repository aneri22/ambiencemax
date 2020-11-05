import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/UserDataService';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {
  //len = this.UsrDataService.viewReq.ReqApprovers.length;
  constructor(public UsrDataService: UserDataService) {
    //console.log(this.UsrDataService.viewReq.ReqApprovers);
   }

  ngOnInit() {
  }

}
