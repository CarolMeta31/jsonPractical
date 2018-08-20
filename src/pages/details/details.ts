

import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  course:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:ServiceProvider) {
    this.course=this.navParams.get('data');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesPage');
  }
getImages(){
  this.service.getCourses().subscribe(data=>{
  })


}
}

