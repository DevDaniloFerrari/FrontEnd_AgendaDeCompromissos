import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PacienteComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'consulta', component: ConsultaComponent},
      { path: 'paciente', component: PacienteComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
