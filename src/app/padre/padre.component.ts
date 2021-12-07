import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }

  public mensajeHijo: Array<number> = new Array<number>();
  public saludoHijo: string | undefined;
  public persona: Usuario = new Usuario();

  ngOnInit(): void {
  }

  public enviarMensaje(): void{
    this.mensajeHijo = [2,5];
  }

  public recibirSaludo($event: any): void{
    this.saludoHijo = $event;
    console.log($event);
  }

  public mostrarDato(): void {
    console.log(this.persona);
  }

}
