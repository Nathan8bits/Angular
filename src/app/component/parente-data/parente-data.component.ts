import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parente-data',
  templateUrl: './parente-data.component.html',
  styleUrls: ['./parente-data.component.css']
})
export class ParenteDataComponent implements OnInit {

  @Input() name:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
