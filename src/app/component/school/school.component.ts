import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  @Input() titulo: string = "titulo";
  @Input() descricao: string = "adicione um pouco de texto";
  @Input() img:string = "assets/diretivas.png"

  constructor() { }

  ngOnInit(): void {
  }

}
