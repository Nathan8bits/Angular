import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reatividade',
  templateUrl: './reatividade.component.html',
  styleUrls: ['./reatividade.component.css']
})
export class ReatividadeComponent implements OnInit {

  produto: string[] = [];
  novoProduto: string = "";

  constructor() { 
    this.produto = [
      "mouse", 
      "monitor"
    ]
  }

  adicionar() {
    if(this.novoProduto !== "") {
      this.produto.push(this.novoProduto);
    }
  }

  remover(index: number) {
    this.produto.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
