import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrentesObraComponent } from './frentes-obra.component';

describe('FrentesObraComponent', () => {
  let component: FrentesObraComponent;
  let fixture: ComponentFixture<FrentesObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrentesObraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrentesObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
