import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private sharedData: SharedDataService
  ) {}

  data: any = {
    location: '',
    latitude: 0,
    longitude: 0,
  };
  ngOnInit(): void {}

  getData() {
    this.http.get('http://localhost:8081/list').subscribe((data) => {
      this.sharedData.data = data;
    });
  }

  addLocation() {
    this.http
      .post('http://localhost:8081/submit', this.data)
      .subscribe((data) => {
        console.log(data);
        
        this.getData();
      });
  }
}
