import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }

  @Input() recibido: Array<number> = new Array<number>();

  @Output() enviarPapa = new EventEmitter<string>();

  ngOnInit(): void {
  }

  public enviar(): void{
    let res = this.recibido[0] + this.recibido[1];
    this.enviarPapa.emit(String(res));
  }

}
