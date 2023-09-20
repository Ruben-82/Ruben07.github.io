import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  Certificados : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let Certificado1 = {
      Nombre : "Administrador de Bases de Datos",
      Descripcion: "Manejo intermedio de SQL SERVER y MySQL",
      Experiencia: "1 año"
    }

    let Certificado2 = {
      Nombre: "Certificado de Bachillerato",
      Descripcion: "Finalización de bachillerato",
      Experiencia: "3 años"
    }

    let Certificado3 = {
      Nombre: "Desarrollo Web Front",
      Descripcion: "Manejo de HTML, CSS y JS",
      Experiencia: "1 año"
    }

    let Certificado4 = {
      Nombre: "Desarrollo Web Back",
      Descripcion: "Manejo de NodeJS",
      Experiencia: "1 año"
    }

    let Certificado5 = {
      Nombre: "Curso de Python",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "https://firebasestorage.googleapis.com/v0/b/calculadora-93291.appspot.com/o/Inteligencia%20artificial%20Cursos%20Kaggle%2FRuben82%20-%20Python.png?alt=media&token=381cbea4-0873-45f5-9b1e-b77d190852d4"
    }

    let Certificado6 = {
      Nombre: "Curso de Pandas",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "https://firebasestorage.googleapis.com/v0/b/calculadora-93291.appspot.com/o/Inteligencia%20artificial%20Cursos%20Kaggle%2FRuben82%20-%20Pandas.png?alt=media&token=cba8d037-6744-48d4-9e9e-922e7054d20a"
    }

    let Certificado7 = {
      Nombre: "Curso de into-machine-learning",
      Descripcion: "Curso realizado en Kaggle",
      Experiencia: "2 dias",
      Imagen: "https://firebasestorage.googleapis.com/v0/b/calculadora-93291.appspot.com/o/Inteligencia%20artificial%20Cursos%20Kaggle%2FRuben82%20-%20Intro%20to%20Machine%20Learning.png?alt=media&token=f86bbbec-078e-4cb7-991e-77b38cee937e"
    }


    this.Certificados.push(Certificado1);
    this.Certificados.push(Certificado2);
    this.Certificados.push(Certificado3);
    this.Certificados.push(Certificado4);
    this.Certificados.push(Certificado5);
    this.Certificados.push(Certificado6);
    this.Certificados.push(Certificado7)
  }

}
