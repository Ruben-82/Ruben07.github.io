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
      fecha: "2014-2018",
      ubicacion: "Orizaba, ver",
      puesto: "CEO",
      empresa: "Kubeet",
      logros: [
        {descripcion: "Contruccion de un invernadero hidropoico"},
        {descripcion: "Creacion de un cluster en hadoop"}
      ]
    };

    let work3 = {
      fecha: "2010-2014",
      ubicacion: "Orizaba,Ver",
      puesto: "CEO",
      empresa: "ADESOFT",
      logros: [
        {descipcion: "Contruccion de ERP en la nube de google"},
        {descripcion: "Creacion de un cluster en hadoop y spark"}
      ]
    };


    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
  }

}