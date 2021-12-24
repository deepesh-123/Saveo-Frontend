import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, DoCheck {
  mapData: any;
  constructor(private sharedData: SharedDataService, private http:HttpClient) {}
  showRoute: boolean = false;
  ngDoCheck() {
    // this.http.get('http://localhost:8081/list').subscribe((data)=>{
    //   this.mapData = data;
    // })
    this.mapData = this.sharedData.data;
    this.showRoute = this.sharedData.showRoute;
    console.log(" map data",this.mapData);
    
  }

  ngOnInit(): void {}
}
