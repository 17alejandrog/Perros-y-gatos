import { Component } from "@angular/core";
import { Gato } from "./Gato";
import { Perro } from "./Perro";
import { movimiento, direciones } from "./Animal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Fabian Guzmán y Alejandro Garcia";
  gato: Gato;
  perro: Perro;
  img:string = "assets/prueba.png";
  derecha: String;
  izquierda: String;
  constructor() {
    this.gato = new Gato("romeo", 3, "angora");
    console.log(this.gato.maullar(this.gato.nombre));

    this.perro = new Perro("dealer", 2, "pitbull");
    console.log(this.perro.ladrar(this.perro.nombre));

    console.log(this.gato.crecerPelo());
    console.log(this.perro.crecerPelo());

    this.derecha = this.gato.movimiento(direciones.IZQUIERDA);
    this.izquierda = this.perro.movimiento(direciones.DERECHA);

    console.log(this.gato.trepar.treparArbol());
    console.log(this.perro.trepar.treparArbol());
  }
}
