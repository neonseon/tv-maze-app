import { ITvShowService } from './tv-show.service';
import { ITVShowDetails } from '../itvshow-details';
import { of } from 'rxjs';

export class TvShowServiceFake implements ITvShowService{
  private fakeTvShowData:ITVShowDetails= {
    title: 'The Mindy Project',
    image: '',
    description: 'The Mindy Project is a single-camera comedy series which follows a skilled OB/GYN navigating the tricky waters of both her personal and professional life.',
    rating: 7.2,
    genre: '"Comedy","Romance","Medical"',
    id: 75,
    cast: 'Mindy Kaling, Ed Weeks, Ike Barinholtz, Beth Grant, Chris Messina, Xosha Roquemore, Adam Pally, Fortune Feimster, Anna Camp, Amanda Setton, Stephen Tobolowsky, Zoe Jarman'
  }
  public getTvShow(search: string) {
    return of(this.fakeTvShowData);
  }
}