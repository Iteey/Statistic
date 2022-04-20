import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyIntroComponent } from './company-intro.component';

describe('CompanyIntroComponent', () => {
  let component: CompanyIntroComponent;
  let fixture: ComponentFixture<CompanyIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
