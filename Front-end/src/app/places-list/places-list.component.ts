import { HttpClient } from '@angular/common/http';
import { Component, OnInit, DoCheck } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css'],
})
export class PlacesListComponent implements OnInit, DoCheck {
  constructor(private sharedData: SharedDataService, private http: HttpClient) {}
  mapData: any;
  exceeded : boolean = false;

  ngOnInit(): void {}

  ngDoCheck() {
    this.mapData = this.sharedData.data;
  }

  showRoute() {
    this.http.get<any>('http://localhost:8081/showroute').subscribe((data)=>{
        if(data.res == 1){
          this.sharedData.showRoute = true;
        }
        else{
          this.exceeded = true;
        }
    })
    
  }
}
