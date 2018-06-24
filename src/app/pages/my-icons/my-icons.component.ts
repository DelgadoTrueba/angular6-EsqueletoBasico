//Modulos
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';


@Component({
  selector: 'app-my-icons',
  templateUrl: './my-icons.component.html',
  styleUrls: ['./my-icons.component.css']
})
export class MyIconsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'atm',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/atm.svg'));
  }

  ngOnInit() {
  }

}
