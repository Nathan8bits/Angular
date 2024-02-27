import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isAliveLampada: boolean = true;

  constructor() { }

  apagar():void{
    this.isAliveLampada = !this.isAliveLampada;
    console.log(`lampada: ${this.isAliveLampada}`)
  }

  ngOnInit(): void {
  }

}
