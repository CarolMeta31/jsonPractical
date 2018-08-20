import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 courses:any;
arrCourses=[];
lessons:any;
arrLessons=[];

  constructor(public navCtrl: NavController,
    public services:ServiceProvider) {

      services.getCourses().subscribe(res=>{
        console.log("response:",res)
        this.courses=res;
       this.arrCourses=this.courses.courses
      //  this.lessons=res;
      //  this.arrLessons=this.lessons.lessons
      });
      console.log(this.courses)
    }
    getData(lessons:any){

      this.navCtrl.push(DetailsPage,{data:lessons});
    }
    
  }


