import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRiscoComponent } from './consultar-risco.component';

describe('ConsultarRiscoComponent', () => {
  let component: ConsultarRiscoComponent;
  let fixture: ComponentFixture<ConsultarRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarRiscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
