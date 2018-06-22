//Importar Modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { HomeComponent } from './pages/home/home.component';
import { EjemploFormularioComponent } from './pages/ejemploFormulario/ejemploFormulario.component';
import { MostrarIdComponent } from './pages/mostrarId/mostrarId.component';
import { Component404Component } from './pages/component404/component404.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ElevationCSSComponent } from './pages/elevation-css/elevation-css.component';

// Array de rutas
const  appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'ejemploFormulario', component: EjemploFormularioComponent },
    { path: 'mostrarId', component: MostrarIdComponent },
    { path: 'mostrarId/:id', component: MostrarIdComponent },
    { path: 'botones', component: ButtonsComponent },
    { path: 'elevationCSS', component: ElevationCSSComponent },
    { path: '**', component: Component404Component }, //Ruta 404
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);