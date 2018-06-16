//Importar Modulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { MyComponente1Component } from './my-componente1/my-componente1.component';
import { MyComponente2Component } from './my-componente2/my-componente2.component';
import { MyComponente3Component } from './my-componente3/my-componente3.component';

// Array de rutas
const  appRoutes: Routes = [
    { path: '', component: MyComponente1Component },
    { path: 'home', component: MyComponente1Component },
    { path: 'myComponente1', component: MyComponente1Component },
    { path: 'myComponente2', component: MyComponente2Component },
    { path: 'myComponente3', component: MyComponente3Component },
    { path: '**', component: MyComponente1Component }, //Ruta 404
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);