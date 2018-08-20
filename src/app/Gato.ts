import { Mamifero } from "./Mamifero";
import { Trepa } from "./Trepa";
import { direciones,Animal } from "./Animal";

export class Gato extends Animal implements Mamifero{
  _pelo: String;
  private _nombre : String;

  crecerPelo():String {
    return 'crecio pelo del gato';
  };

  movimiento(direccion:direciones): String {
    switch(direccion){
      case direciones.IZQUIERDA:
        return 'se movilizo hacia la izquierda';
      case direciones.DERECHA:
      return'se movilizo hacia la derecha';
  }
}

  constructor(nombre:String,edad:number,raza:String){
    super(edad,raza,new Trepa());
    this._nombre = nombre;
  }

  get nombre():String{
    return this._nombre;
  }

  set nombre(nombre:String){
    this._nombre = nombre;
  }

 maullar(string:String):String{
  return 'me llamo '+string + ' meow! ';
  } 


}