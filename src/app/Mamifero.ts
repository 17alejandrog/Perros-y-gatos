import { direciones } from "./Animal";

export interface Mamifero {
  _pelo: String;

  crecerPelo(): String;
  movimiento(direciones:direciones):String;
}
