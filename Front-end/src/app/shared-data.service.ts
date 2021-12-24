import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  constructor() {}

  showRoute: boolean = false;
  data: any = [
    {
      location: 'Indore',
      latitude:  22.719568,
      longitude: 75.857727,
    },
    {
      location: 'Bhopal',
      latitude: 23.259933,
      longitude: 77.412613,
    },
    {
      location: 'Pune',
      latitude: 18.516726,
      longitude: 73.856255,
    },
    {
      location: 'Bangalore',
      latitude: 12.972442,
      longitude: 77.580643,
    },
  ];
}
