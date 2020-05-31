import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditClientComponent } from './create-or-edit-client.component';

describe('CreateOrEditClientComponent', () => {
  let component: CreateOrEditClientComponent;
  let fixture: ComponentFixture<CreateOrEditClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
