export class Empresa {
  id: number;
  nombre: string;
  razon_social: string;
  rfc: string;
  numero_iva: string;
  cmic: string;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.razon_social = '';
    this.rfc = '';
    this.numero_iva = '';
    this.cmic = '';
  }
}
