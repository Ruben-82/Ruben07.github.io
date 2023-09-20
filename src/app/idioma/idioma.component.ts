import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  Idiomas : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let idioma1 = {
      Idioma: "Español"
    }

    let idioma2 = {
      Idioma: "Inglés"
    }

    this.Idiomas.push(idioma1);
    this.Idiomas.push(idioma2);
  }

}
