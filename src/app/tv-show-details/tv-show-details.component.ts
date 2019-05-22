import { Component, OnInit } from '@angular/core';
import { ITVShowDetails } from '../itvshow-details';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TVShowDetailsComponent implements OnInit {

  show: ITVShowDetails
  constructor() {
    this.show = {
      title: 'The Mindy Project',
      image: 'https://tvseriesfinale.com/wp-content/uploads/2016/05/The-Mindy-Project-TV-show-on-Hulu-season-5-renewal-canceled-or-renewed-590x332.jpeg',
      description: 'A young Ob/Gyn doctor balances her personal and professional life, surrounded by quirky co-workers in a small office.',
      cast: 'Mindy Kaling, Ike Barinholtz, Ed Weeks',
      rating: 8,
      genre: 'Comedy',
      id: 912      
    }
   }

  ngOnInit() {
  }

}
