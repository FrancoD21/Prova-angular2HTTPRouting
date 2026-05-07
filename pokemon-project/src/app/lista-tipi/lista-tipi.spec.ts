import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipi } from './lista-tipi';

describe('ListaTipi', () => {
  let component: ListaTipi;
  let fixture: ComponentFixture<ListaTipi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTipi],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
