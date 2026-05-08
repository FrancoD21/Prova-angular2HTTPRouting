import { DefaultTitleStrategy, Routes } from '@angular/router';
import { ListaTipi } from './lista-tipi/lista-tipi';
import { ListaPokemon } from './lista-pokemon/lista-pokemon';
import { DettagliPokemon } from './dettagli-pokemon/dettagli-pokemon';


export const routes: Routes = [
  { path: 'tipi', component: ListaTipi },
  { path: 'lista/:type', component: ListaPokemon },
  { path: 'dettagli/:id', component:  DettagliPokemon},
  { path: '', redirectTo: '/tipi', pathMatch: 'full' }
];