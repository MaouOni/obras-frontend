import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenteDetailComponent } from './frente-detail.component';

describe('FrenteDetailComponent', () => {
  let component: FrenteDetailComponent;
  let fixture: ComponentFixture<FrenteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
