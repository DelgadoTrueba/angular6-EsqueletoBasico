import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { AlimentoService } from 'src/app/services/alimento.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  allFridge;
  mainFridge;
  leftSide;
  rightSide;
  freezer;

  constructor(
    private notificationService: NotificationService,
    private alimenotsService: AlimentoService
  ) { }

  ngOnInit() {
    this.alimenotsService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimenotsService.alimentosAllFridgeFilter
        this.allFridge = alimentos.filter( (item) => filterFunction(item) );
      }
    );

    this.alimenotsService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimenotsService.alimentosMainFridgeFilter
        this.mainFridge = alimentos.filter( (item) => filterFunction(item) );
      }
    );

    this.alimenotsService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimenotsService.alimentosLateralIzqFilter;
        this.leftSide = alimentos.filter( (item) => filterFunction(item) );
      }
    );

    this.alimenotsService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimenotsService.alimentosLateralDerFilter;
        this.rightSide = alimentos.filter( (item) => filterFunction(item) );
      }
    );

    setTimeout( () =>{
      this.alimenotsService.notification$.subscribe(
        (alimentos) => {
          let filterFunction = this.alimenotsService.alimentosFreezerFilter;
          this.freezer = alimentos.filter( (item) => filterFunction(item) );
        }
      );
    } ,5000)
  }

  /*SnackBar*/
  public mostrarCarita(){
    this.notificationService.notify(":)");
  }

  public mostrarHola(){
    this.notificationService.notify("Hola");
  }

  public mostrarConfirmado(){
    this.notificationService.notify("Confirmado");
  }

  public mostrarError1(){
    this.notificationService.notify("Error1");
  }
  /*SnackBar*/

  /*Servicio de ALIMENTOS*/
  anadirAgua(cantidad){
    this.alimenotsService.setAgua(cantidad);
  }

  anadirBroccoli(cantidad){
    this.alimenotsService.setBroccoli(cantidad);
  }

  anadirCocacola(cantidad){
    this.alimenotsService.setCocaCola(cantidad);
  }

  anadirChurros(cantidad){
    this.alimenotsService.setChurros(cantidad);
  }

}
