import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPokemon } from './dettagli-pokemon';

describe('DettagliPokemon', () => {
  let component: DettagliPokemon;
  let fixture: ComponentFixture<DettagliPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(DettagliPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
