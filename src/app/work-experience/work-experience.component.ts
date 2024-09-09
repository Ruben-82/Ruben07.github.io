import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {


    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Orizaba, Ver",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros : [
        {descripcion: " Contruccion de un ERP en la nube de google"},
        {descripcion: "Creacion de un cluster en hadoop y spark"}


    ]
    };

    let work2 = {
      fecha: "2010-2014",
      ubicacion: "Orizaba,Ver",
      puesto: "CEO",
      empresa: "ADESOFT",
      logros: [
        {descipcion: "Curso kagle"},
        {descripcion: "Curso de python"},
        {descripcion: "Creacion de flutter con IA en python(proyecto taxi-trip-prediction)"},
        {descripcion: "Curso de Pandas"},
        {descripcion: "Curso Intro to Machine Learning"},
        {descripcion: "Curso Intermedie Machine Learning"},

      ]
    };


    this.workExperience.push(work1);
    this.workExperience.push(work2);
  }

}
