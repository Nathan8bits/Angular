import { Component,
        Input, 
        OnInit,
        AfterContentInit,
        AfterViewInit,
        OnChanges,
      
        DoCheck,
        AfterContentChecked,
        AfterViewChecked,

        OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-checked-exemplos',
  templateUrl: './checked-exemplos.component.html',
  styleUrls: ['./checked-exemplos.component.css']
})
export class CheckedExemplosComponent implements 
    OnInit,
    AfterContentInit,
    AfterViewInit,
    OnChanges,
      
    DoCheck,
    AfterContentChecked,
    AfterViewChecked,

    OnDestroy 
    {

  @Input() valor:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }
  ngAfterViewChecked(): void {
    console.log("afterviewChecked")
  }
  ngAfterContentChecked(): void {
    console.log("destroy")
  }
  ngDoCheck(): void {
    console.log("destroy")
  }
  ngOnChanges(): void {
    console.log("destroy")
  }
  ngAfterViewInit(): void {
    console.log("destroy")
  }
  ngAfterContentInit(): void {
    console.log("destroy")
  }
}
