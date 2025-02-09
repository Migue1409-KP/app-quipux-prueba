import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllTracklistsComponent } from './find-all-tracklists.component';

describe('FindAllTracklistsComponent', () => {
  let component: FindAllTracklistsComponent;
  let fixture: ComponentFixture<FindAllTracklistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAllTracklistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllTracklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
