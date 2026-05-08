import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dettagli-pokemon',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dettagli-pokemon.html',
  styleUrl: './dettagli-pokemon.css'
})
export class DettagliPokemon implements OnInit {
  pokemon: any = null;
  nomePokemon: string | null = '';
  loading: boolean = true;

  // Variabili stile docente
  o!: Observable<Object>;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Leggiamo il nome del pokemon dall'URL (es. /dettagli/pikachu)
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    this.nomePokemon = params.get('id'); // 'id' deve corrispondere al nome nel file routes
    this.makerequest();
  }

  makerequest(): void {
    this.loading = true;
    this.o = this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.nomePokemon}`);
    this.o.subscribe(this.getData);
  }

  getData = (d: any) => {
    this.pokemon = d;
    this.loading = false;
    // Forza l'aggiornamento per mostrare l'immagine e i dati
    this.cdr.detectChanges();
  }
}