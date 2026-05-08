import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-pokemon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './lista-pokemon.html'
})
export class ListaPokemon implements OnInit {
  pokemonList: any[] = [];
  tipoSelezionato: string | null = '';
  loading = true;

  // Iniettiamo ActivatedRoute per leggere l'URL
  constructor(
    public http: HttpClient, 
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Leggiamo il parametro dall'URL (es. 'fire')
    this.route.paramMap.subscribe(params => {
      this.tipoSelezionato = params.get('type');
      this.makerequest();
    });
  }

  makerequest(): void {
    this.loading = true;
    // URL dinamico basato sul tipo selezionato
    this.http.get<any>(`https://pokeapi.co/api/v2/type/${this.tipoSelezionato}`)
             .subscribe(data => this.getData(data));
  }

  getData = (d: any) => {
    // NOTA: Nel JSON del tipo, i pokemon sono dentro l'array 'pokemon'
    this.pokemonList = d.pokemon; 
    this.loading = false;
    this.cdr.detectChanges(); // Per sicurezza, come abbiamo fatto prima
  }
}