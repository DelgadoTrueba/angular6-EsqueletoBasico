import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

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
}
