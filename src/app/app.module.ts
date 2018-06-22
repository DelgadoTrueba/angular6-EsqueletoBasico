//Importar Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

//Importar Material Dessing
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


//Importar Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EjemploFormularioComponent } from './pages/ejemploFormulario/ejemploFormulario.component';
import { MostrarIdComponent } from './pages/mostrarId/mostrarId.component';
import { NavegadorComponent } from './component/navegador/navegador.component';
import { HeaderComponent } from './component/header/header.component';
import { Component404Component } from './pages/component404/component404.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ElevationCSSComponent } from './pages/elevation-css/elevation-css.component';

@NgModule({
  //Componentes, Pipes y Directivas
  declarations: [
    AppComponent,
    HomeComponent,
    EjemploFormularioComponent,
    MostrarIdComponent,
    NavegadorComponent,
    HeaderComponent,
    Component404Component,
    ButtonsComponent,
    ElevationCSSComponent,
  ],
  //Modulos y Material Design
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatButtonModule
  ],
  //Servicos
  providers: [ appRoutingProviders ],
  //Arranque
  bootstrap: [AppComponent]
})
export class AppModule { }
