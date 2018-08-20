import { Trepar } from "./Trepar";

export class NoTrepa implements Trepar {
  treparArbol():String {
    return 'no puede trepar arbol';
  }

}