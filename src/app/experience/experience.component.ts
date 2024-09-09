import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ExperienciaLaboral : Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    let Experiencia1 = {
      Tecnologia: "HTML",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje: 45}
      ]
    }

    let Experiencia2 = {
      Tecnologia: "CSS",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje: 20}
      ]
    }

    let Experiencia3 = {
      Tecnologia: "JS",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje: 15}
      ]
    }

    let Experiencia4 = {
      Tecnologia : "Node JS",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje: 15}
      ]
    }

    let Experiencia5 = {
      Tecnologia: "REACT",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje:30}
      ]
    }

    let Experiencia6 = {
      Tecnologia: "SQL Server",
      Area: "Base de Datos",
      Nivel: [
        {porcentaje: 20}
      ]
    }

    let Experiencia7 = {
      Tecnologia: "MySQL",
      Area: "Base de Datos",
      Nivel: [
        {porcentaje: 20}
      ]
    }

    let Experiencia8 = {
      Tecnologia: "Draw.io",
      Area: "Diseño de Software",
      Nivel: [
        {porcentaje: 30}
      ]
    }

    let Experiencia9 = {
      Tecnologia: "Angular",
      Area: "Desarrollo Web",
      Nivel: [
        {porcentaje:35}
      ]
    }

    let Experiencia10 = {
      Tecnologia: "Postgres",
      Area: "Base de datos",
      Nivel: [
        {porcentaje: 20}
      ]
    }

    let Experiencia11 = {
      Tecnologia: "Python",
      Area: "Desarrollo backend",
      Nivel: [
        {porcentaje: 25 }
      ]
    }

    this.ExperienciaLaboral.push(Experiencia1);
    this.ExperienciaLaboral.push(Experiencia2);
    this.ExperienciaLaboral.push(Experiencia3);
    this.ExperienciaLaboral.push(Experiencia4);
    this.ExperienciaLaboral.push(Experiencia5);
    this.ExperienciaLaboral.push(Experiencia6);
    this.ExperienciaLaboral.push(Experiencia7);
    this.ExperienciaLaboral.push(Experiencia8);
    this.ExperienciaLaboral.push(Experiencia9);
    this.ExperienciaLaboral.push(Experiencia10);
    this.ExperienciaLaboral.push(Experiencia11);

  }

}
