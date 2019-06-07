import { Component } from '@angular/core';
import { ITVShowDetails } from './itvshow-details';
import { TvShowService } from './tv-show/tv-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-maze-app';

  constructor(private tvshowservice : TvShowService){

  }

  
  currentshow : ITVShowDetails;

  doSearch(searchValue){
    if(searchValue){
      const userInput = searchValue.replace(' ','%20');
      this.tvshowservice.getTvShow(userInput).subscribe(data => this.currentshow = data)

    }

  }
}
