import { Component, OnInit } from '@angular/core';
import { ITVShowDetails } from '../itvshow-details';
import { TvShowService } from '../tv-show/tv-show.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TVShowDetailsComponent implements OnInit {

  show: ITVShowDetails;
  loadedCast: Array<object> = [];
  finalCast: any[] = [];

  constructor(private tvShowService:TvShowService) {
    
  }

  ngOnInit() {

    this.tvShowService.getTvShow('the-mindy-project').subscribe(data => {
   
      this.tvShowService.getTvShowCast(data.id).subscribe(loadedCast => {

        for (let prop in loadedCast) {
          this.finalCast.push(loadedCast[prop].person.name);
        }

        data.cast = this.finalCast;

        this.show = data;

      });
    });
  } 

}
