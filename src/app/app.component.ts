import { Component } from '@angular/core';
import { ITVShowDetails } from './itvshow-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-maze-app';

  showDetails : ITVShowDetails

  doSearch(searchValue){
    
  }
}
