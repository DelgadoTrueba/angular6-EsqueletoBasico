import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponente1Component } from './my-componente1/my-componente1.component';
import { MyComponente2Component } from './my-componente2/my-componente2.component';
import { MyComponente3Component } from './my-componente3/my-componente3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponente1Component,
    MyComponente2Component,
    MyComponente3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
