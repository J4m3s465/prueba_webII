import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTablaComponent } from './editar-tabla.component';

describe('EditarTablaComponent', () => {
  let component: EditarTablaComponent;
  let fixture: ComponentFixture<EditarTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
