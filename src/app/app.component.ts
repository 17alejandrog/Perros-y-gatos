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
  title = "app";
  gato: Gato;
  perro: Perro;
  img:any = require("./../prueba.png");
  derecha:String;
  izquierda:String;
  constructor() {
    this.gato = new Gato("orejo", 12, "weed");
    console.log(this.gato.maullar(this.gato.nombre));

    this.perro = new Perro("mikolas", 23, "asd");
    console.log(this.perro.ladrar(this.perro.nombre));

    console.log(this.gato.crecerPelo());
    console.log(this.perro.crecerPelo());

    this.derecha = this.gato.movimiento(direciones.IZQUIERDA);
    this.izquierda = this.perro.movimiento(direciones.DERECHA);

    console.log(this.gato.trepar.treparArbol());
    console.log(this.perro.trepar.treparArbol());
  }
}
