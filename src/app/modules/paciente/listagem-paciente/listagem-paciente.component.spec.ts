import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPacienteComponent } from './listagem-paciente.component';

describe('ListagemPacienteComponent', () => {
  let component: ListagemPacienteComponent;
  let fixture: ComponentFixture<ListagemPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
