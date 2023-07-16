import { Injectable } from '@angular/core';
import { Blog } from '../model/blog/blog';

@Injectable({
    providedIn:'root'
})
export class HousingService {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
    protected blogList: Blog[] = [
        {
          id: 0,
          name: 'Acme Fresh Start Housing',

          state: 'IL',
          photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
          availableUnits: 4,
          wifi: true,
          content:"",
        },
        {
          id: 1,
          name: 'A113 Transitional Housing',
          state: 'CA',
          photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
          availableUnits: 0,
          wifi: false,
          content:""
        },
        {
          id: 2,
          name: 'Warm Beds Housing Support',
          content:"",
          state: 'AK',
          photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
          availableUnits: 1,
          wifi: false,
        },
        {
          id: 3,
          name: 'Homesteady Housing',
          content:"",
          state: 'IL',
          photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
          availableUnits: 1,
          wifi: true,
        },
        {
          id: 4,
          name: 'Happy Homes Group',
          state: 'IN',
          photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
          availableUnits: 1,
          wifi: true,
          content:"",
        },
        {
          id: 5,
          name: 'Hopeful Apartment Group',
          content:"",
          state: 'CA',
          photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
          availableUnits: 2,
          wifi: true,
        },
        {
          id: 6,
          name: 'Seriously Safe Towns',
          content:"",
          state: 'CA',
          photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
          availableUnits: 5,
          wifi: true,
        },
        {
          id: 7,
          name: 'Hopeful Housing Solutions',
          content:"",
          state: 'CA',
          photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
          availableUnits: 2,
          wifi: true,
      
        },
        {
          id: 8,
          name: 'Seriously Safe Towns',
          content:"",
          state: 'CA',
          photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
          availableUnits: 10,
          wifi: false,
        },
        {
          id: 9,
          name: 'Capital Safe Towns',
          content:"",
          state: 'OR',
          photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
          availableUnits: 6,
          wifi: true,
        }
      ];
    
      getAllHousingLocations(): Blog[] {
        return this.blogList;
      }
    
      getHousingLocationById(id: number): Blog | undefined {
        return this.blogList.find(housingLocation => housingLocation.id === id);
      }
    }
    
