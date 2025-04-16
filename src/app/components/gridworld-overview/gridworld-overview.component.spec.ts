import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridworldOverviewComponent } from './gridworld-overview.component';

describe('GridworldOverviewComponent', () => {
  let component: GridworldOverviewComponent;
  let fixture: ComponentFixture<GridworldOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridworldOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridworldOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
