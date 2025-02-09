import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTracklistComponent } from './create-tracklist.component';

describe('CreateTracklistComponent', () => {
  let component: CreateTracklistComponent;
  let fixture: ComponentFixture<CreateTracklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTracklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTracklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
