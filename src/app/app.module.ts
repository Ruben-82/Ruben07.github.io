import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InteresesComponent } from './intereses/intereses.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { IdiomaComponent } from './idioma/idioma.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducacionComponent } from './educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    InteresesComponent,
    CertificadosComponent,
    IdiomaComponent,
    ExperienceComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
