import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
