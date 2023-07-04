import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePannerComponent } from './page-panner.component';

describe('PagePannerComponent', () => {
  let component: PagePannerComponent;
  let fixture: ComponentFixture<PagePannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
