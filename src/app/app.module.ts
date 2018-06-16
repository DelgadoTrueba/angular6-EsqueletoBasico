import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar Componentes
import { AppComponent } from './app.component';
import { MyComponente1Component } from './my-componente1/my-componente1.component';
import { MyComponente2Component } from './my-componente2/my-componente2.component';
import { MyComponente3Component } from './my-componente3/my-componente3.component';

//Importar Modulos
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  //Componentes
  declarations: [
    AppComponent,
    MyComponente1Component,
    MyComponente2Component,
    MyComponente3Component
  ],
  //Modulos
  imports: [
    BrowserModule,
    routing,
  ],
  //Servicos
  providers: [ appRoutingProviders ],
  //Arranque
  bootstrap: [AppComponent]
})
export class AppModule { }
