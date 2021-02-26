import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchItemComponent } from './movie-search-item.component';

describe('MovieSearchItemComponent', () => {
  let component: MovieSearchItemComponent;
  let fixture: ComponentFixture<MovieSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
