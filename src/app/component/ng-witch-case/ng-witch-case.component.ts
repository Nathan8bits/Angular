import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-witch-case',
  templateUrl: './ng-witch-case.component.html',
  styleUrls: ['./ng-witch-case.component.css']
})
export class NgWitchCaseComponent implements OnInit {

  menuType: string = "";
  digitando: string = "";


  constructor() { }

  definirMenuType(){
    this.menuType = this.digitando;
  }

  ngOnInit(): void {
  }

}
