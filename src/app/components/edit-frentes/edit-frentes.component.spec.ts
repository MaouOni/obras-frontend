import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFrentesComponent } from './edit-frentes.component';

describe('EditFrentesComponent', () => {
  let component: EditFrentesComponent;
  let fixture: ComponentFixture<EditFrentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFrentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFrentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
