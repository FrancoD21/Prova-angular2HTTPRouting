import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonType, TypeResponse } from '../models/pokemon.model';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-tipi',
  imports: [RouterModule],
  templateUrl: './lista-tipi.html',
  styleUrl: './lista-tipi.css',
})
export class ListaTipi implements OnInit{
  tipi: PokemonType[] = [];   
  loading = true;

  constructor(public http:HttpClient){}

  ngOnInit(): void{
    this.makerequest();
  }

  makerequest():void{
    this.loading = true;
    this.http.get<TypeResponse>('https://pokeapi.co/api/v2/type').subscribe(this.getData);

  }

  getData = (d: TypeResponse) => {
    console.log("Dati ricevuti: ", d)
    this.tipi = d.results;
    this.loading = false;
  }



}
