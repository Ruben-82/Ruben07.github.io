import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {
  Intereses : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let gusto1 = {
      Pasatiempo: "Inteligencias Artificiales"
    }
    let gusto2 = {
      Pasatiempo: "Videojuegos"
    }
    let gusto3 = {
      Pasatiempo: "Desarrollo Web"
    }
    let gusto4 = {
      Pasatiempo: "Series de Televisión"
    }
    let gusto5 = {
      Pasatiempo: "Música"
    }
    let gusto6 = {
      Pasatiempo: "Historia Universal"
    }
    let gusto8 = {
      Pasatiempo: "Diseño Web"
    }
    let gusto9 = {
      Pasatiempo: "Bases de datos"
    }
    let gusto10 = {
      Pasatiempo: "Documentales"
    }

    this.Intereses.push(gusto1);
    this.Intereses.push(gusto2);
    this.Intereses.push(gusto3);
    this.Intereses.push(gusto4);
    this.Intereses.push(gusto5);
    this.Intereses.push(gusto6);
    this.Intereses.push(gusto8);
    this.Intereses.push(gusto9);
    this.Intereses.push(gusto10);
  }

}
