import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiblingComunicationService } from '../sibling-comunication.service';
@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  details:any;

  constructor(private router:ActivatedRoute,private sibService : SiblingComunicationService) { }


  ngOnInit(): void {

    this.sibService.sendMessage.subscribe( obj  =>{
      console.log(obj)
      this.details = obj;


    })




  }

}
