import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mostrarId',
  templateUrl: './mostrarId.component.html',
  styleUrls: ['./mostrarId.component.css']
})
export class MostrarIdComponent implements OnInit {

  public id: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe( (params: Params)=>{
      this.id = params.id;
    })
  }

}
