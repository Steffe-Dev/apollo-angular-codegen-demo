import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderApiStuffComponent } from './render-api-stuff.component';

describe('RenderApiStuffComponent', () => {
  let component: RenderApiStuffComponent;
  let fixture: ComponentFixture<RenderApiStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderApiStuffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderApiStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
