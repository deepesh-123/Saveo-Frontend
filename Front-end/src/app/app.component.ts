import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assingment';

  constructor(private http: HttpClient, private sharedData: SharedDataService) {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:8081/list').subscribe((data) => {
      this.sharedData.data = data;
    });
  }

  deleteData() {
    this.http.get('http://localhost:8081/deletedata').subscribe((data)=>{
      
    })
    this.sharedData.data = null;
  }
}
