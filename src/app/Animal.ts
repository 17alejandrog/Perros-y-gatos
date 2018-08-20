import { Trepar } from "./Trepar";

export class Animal{
  
  private _edad : number;
  private _raza : String;
  private _trepar: Trepar;

  constructor(edad:number,raza:String,trepar:Trepar){
    this._edad = edad;
    this._raza = raza;
    this._trepar = trepar;
  }

  get edad():number{ 
    return this._edad;
  }

  get raza():String{ 
    return this._raza;
  }

  set edad (edad:number) {
    this._edad = edad;
  }

  set raza (raza:String) {
    this._raza = raza;
  }

  get trepar ():Trepar {
    return this._trepar;
  }
}

export const IZQUIERDA=1;
export const DERECHA=2;
export enum direciones{IZQUIERDA,DERECHA};

export function movimiento(direccion:direciones):String {
  switch(direccion){
    case direciones.IZQUIERDA:
      return 'se movilizo hacia la izquierda';
    case direciones.DERECHA:
    return'se movilizo hacia la derecha';
    default:
    break;
  }
}