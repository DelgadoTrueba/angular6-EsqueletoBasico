//Importar Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Importar Flex
import { FlexLayoutModule } from "@angular/flex-layout";

//Importar Material Dessing
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';


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
import { MyIconsComponent } from './pages/my-icons/my-icons.component';

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
    MyIconsComponent,
  ],
  //Modulos y Material Design
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,

    FlexLayoutModule,
  ],
  //Servicos
  providers: [ appRoutingProviders ],
  //Arranque
  bootstrap: [AppComponent]
})
export class AppModule { }
