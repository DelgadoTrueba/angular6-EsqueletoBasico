//Importar Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';

//Importar Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EjemploFormularioComponent } from './pages/ejemploFormulario/ejemploFormulario.component';
import { MostrarIdComponent } from './pages/mostrarId/mostrarId.component';
import { NavegadorComponent } from './component/navegador/navegador.component';
import { HeaderComponent } from './component/header/header.component';
import { Component404Component } from './pages/component404/component404.component';

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
  ],
  //Modulos
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule
  ],
  //Servicos
  providers: [ appRoutingProviders ],
  //Arranque
  bootstrap: [AppComponent]
})
export class AppModule { }
