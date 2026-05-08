import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. AGGIUNGI ChangeDetectorRef
import { RouterModule } from '@angular/router';
import { PokemonType, TypeResponse } from '../models/pokemon.model';

@Component({
  selector: 'app-lista-tipi',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './lista-tipi.html',
  styleUrl: './lista-tipi.css',
})
export class ListaTipi implements OnInit {
  tipi: PokemonType[] = [];  
  loading: boolean = false;

  // 2. INIETTALO NEL COSTRUTTORE come 'private cdr: ChangeDetectorRef'
  constructor(public http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.makerequest();
  }

  makerequest(): void {
    this.loading = true;
    
    this.http.get<TypeResponse>('https://pokeapi.co/api/v2/type')
             .subscribe(data => {
               this.getData(data);
             });
  }

  getData = (d: TypeResponse) => {
    console.log("Dati ricevuti con successo: ", d);
    this.tipi = d.results;
    this.loading = false;
    
    // 3. FORZA IL DISEGNO DELLA PAGINA
    // Questo dice ad Angular: "Ehi, i dati sono qui, aggiorna l'HTML adesso!"
    this.cdr.detectChanges(); 
  }
}