import { Animal,direciones } from "./Animal";
import { Mamifero } from "./Mamifero";
import { NoTrepa } from "./NoTrepa";

export class Perro extends Animal implements Mamifero {
  movimiento(direcion: direciones): String {
    switch(direcion){
      case direciones.IZQUIERDA:
        return 'se movilizo hacia la izquierda';
      case direciones.DERECHA:
      return'se movilizo hacia la derecha';
  }
  }
  _pelo: String;
  crecerPelo():String {
    return 'crecio pelo de perro';
  }

  
  private _nombre : String;
  
  constructor(nombre:String,edad:number,raza:String){
    super(edad,raza, new NoTrepa());
    this._nombre = nombre;
  }

  get nombre():String{
    return this._nombre;
  }

  set nombre(nombre:String){
    this._nombre = nombre;
  }

  ladrar(string:String):String{
    return 'me llamo '+string+' Woof! ';
  }
}