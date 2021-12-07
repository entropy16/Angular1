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

  public imageURL = "https://placeimg.com/400/200/any";

  public activedButton: boolean = false;

  constructor(){
    this.addFirstElement("Jhon");
    this.addLastElement("Jorge");
    this.deletelastElement();
    console.log(this.nombres);

    let usuario:Usuario = new Usuario();
    usuario.idUsuario = 1;
    usuario.edad = 20;
    usuario.nombre = "Ricardo";
    usuario.estado = true;
    
    let usuario2:Usuario = new Usuario();
    usuario2.idUsuario = 2;
    usuario2.edad = 23;
    usuario2.nombre = "José";
    usuario2.estado = true;

    this.listUsuarios.push(usuario);
    this.listUsuarios.push(usuario2);

    this.eliminarPorId(2);
  }

  public addFirstElement(nombre: string): void{
    this.nombres.unshift(nombre);
  }

  public addLastElement(nombre: string): void{
    this.nombres.push(nombre);
  }

  public deletelastElement(): void{
    let res = this.nombres.pop();
    console.log("Se eliminó " + res);
  }

  public contacList(list:string[]): string[]{
    return this.nombres.concat(list);
  }

  public eliminarPorId(id:number): void {
    for (const iterator of this.listUsuarios) {
      if (iterator.idUsuario === id) {
        console.log("Se eliminó el usuario con id: " + iterator.idUsuario);
        this.listUsuarios.splice(this.listUsuarios.indexOf(iterator), 1);
      }
    }
  }

  public desactivarBoton(data : boolean): void{
    this.activedButton = data;
  }

  public mostrarEvento(e: Event): void{
    console.log("El enter fue presionado")
  }

}


