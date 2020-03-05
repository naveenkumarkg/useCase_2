import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  registeruser(body) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
    let url = "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/data/adduser";
    let mapUrl = url + '?' + 'username=' + body.username +  '&password=' + body.password;
  
    return this.http.post(mapUrl,null, {
      headers: headers
    });
  }

  loginUser(username,password){
    let url = "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/data/GetUserlist?username=" +username + "&password=" +password;

    return this.http.get(url);
  }

  getTime(){
   return this.http.get("http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/data/gettime");
  }

  // getWishListCategories(){
  //   return this.http.get("http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/Data/Getwishlist")
  //  }



  // addWhishList(category,value) {
 
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
  //   let url = "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/Data/post";
  //   let mapUrl = url + '?category='+ category  + '&value=' + value;
  
  //   return this.http.post(mapUrl,null, {
  //     headers: headers
  //   });
  // }

}
