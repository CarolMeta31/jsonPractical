import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider {

   url="assets/codetribe.json";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

 getCourses(){
   return this.http.get(this.url)
   
  
 }
//  getImage(){
//   return this.http.get(this.url)
//  }
}
