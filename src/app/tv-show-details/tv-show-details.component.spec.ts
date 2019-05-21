import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowDetailsComponent } from './tv-show-details.component';

describe('TVShowDetailsComponent', () => {
  let component: TVShowDetailsComponent;
  let fixture: ComponentFixture<TVShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVShowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
