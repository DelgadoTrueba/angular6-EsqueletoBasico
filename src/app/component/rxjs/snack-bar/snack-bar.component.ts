import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  subscriptionNotificationService: Subscription;

  constructor(
    public snackbar: MatSnackBar,
    public notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.subscriptionNotificationService = this.notificationService.notification$.subscribe(
      (notification) => {this.openNotification(notification)}
    )
  }

  private openNotification(message: string){
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    let dialogRef = this.snackbar.open(message, "close", config);
  }

  ngOnDestroy() {
    this.subscriptionNotificationService.unsubscribe();
  }

}
