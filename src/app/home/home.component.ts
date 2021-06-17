import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url = "http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("CIAOß")
    fetch(this.url+"posts", {mode:'cors'}).then(function(response) {
      return response.text();
    }).then(function(r){
      console.log("rrr",r);
  });
    // this.http.get(this.url).subscribe((response: any) => {
    //   console.log("CIAO:",response)
    // })
  }

}
