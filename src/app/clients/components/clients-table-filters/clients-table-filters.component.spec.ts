import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTableFiltersComponent } from './clients-table-filters.component';

describe('ClientsTableFiltersComponent', () => {
  let component: ClientsTableFiltersComponent;
  let fixture: ComponentFixture<ClientsTableFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsTableFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
