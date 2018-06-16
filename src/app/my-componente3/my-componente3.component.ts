import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-componente3',
  templateUrl: './my-componente3.component.html',
  styleUrls: ['./my-componente3.component.css']
})
export class MyComponente3Component implements OnInit {

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
