import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public nombres: string[] = ["Diego", "Sebas"];

  public nombres2: string[] = ["Andres"];

  public listUsuarios: Usuario[] = [];

  constructor(){
    this.addFirstElement("Jhon");
    this.addLastElement("Jorge");
    this.deletelastElement()
    console.log(this.nombres);

    let usuario:Usuario = new Usuario();
    usuario.idUsuario = 1;
    usuario.edad = 20;
    usuario.nombre = "Ricardo";
    usuario.estado = true;
    
    let usuario2:Usuario = new Usuario();
    usuario2.idUsuario = 2;
    usuario2.edad = 23;
    usuario2.nombre = "José"
    usuario2.estado = true;

    this.listUsuarios.push(usuario)
    this.listUsuarios.push(usuario2)
  }

  public addFirstElement(nombre: string): void{
    this.nombres.unshift(nombre);
  }

  public addLastElement(nombre: string): void{
    this.nombres.push(nombre);
  }

  public deletelastElement(): void{
    let res = this.nombres.pop();
    console.log("Se eliminó" + res)
  }

  public contacList(list:string[]): string[]{
    return this.nombres.concat(list);
  }

}


