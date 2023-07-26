import { Injectable } from '@angular/core';
import { Blog } from '../model/blog/blog';
import { BlogAPIService } from '../api/BlogAPIService';

@Injectable({
    providedIn:'root'
})
export class HousingService {
    constructor(private api : BlogAPIService){}

     blogList: Blog[] = [];

    public getAllBlog(){
      
    }
    
    }
    
