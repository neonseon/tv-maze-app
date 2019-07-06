import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSearchComponent } from './tv-show-search.component';
import{ MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule} from '@angular/material';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TvShowSearchComponent', () => {
  let component: TvShowSearchComponent;
  let fixture: ComponentFixture<TvShowSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ TvShowSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
