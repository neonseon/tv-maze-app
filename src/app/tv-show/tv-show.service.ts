import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generate } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITVShowDetails } from '../itvshow-details';
import {map} from 'rxjs/operators';

interface ITvShow{
  name:string,
  id:number,
  genres:string,
  summary:string,  
  image:{
    medium:string
  },
  rating:{
    average:number
  },
  cast:string 
}

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient:HttpClient) {
      
  }
  getTvShow(name:string){
      }
    return this.httpClient.get<ITvShow>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data=>this.transformToITvShowDetails(data)))
  }
  getCast(id:number){
    return this.httpClient.get<ITvShow>(`${environment.baseUrl}api.tvmaze.com/shows/${id}/cast`)
  }
  private transformToITvShowDetails(data:ITvShow):ITVShowDetails{
    return{
      title:data.name,
      image:data.image.medium,
      description:data.summary,
      rating:data.rating.average,
      genre:data.genres,
      id:data.id,
      cast:data.cast
    }
  }

}
