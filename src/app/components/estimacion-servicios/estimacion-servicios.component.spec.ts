import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimacionServiciosComponent } from './estimacion-servicios.component';

describe('EstimacionServiciosComponent', () => {
  let component: EstimacionServiciosComponent;
  let fixture: ComponentFixture<EstimacionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimacionServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimacionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
