export class Catalogo {
  id: number;
  clave: string;
  nombre: string;
  descripcion: string;
  unidad: string;
  costo_unitario: number;
  cantidad: number;
  frente_id: number;
  segunProyecto: number;
  hastaEstimacionAnterior: number;
  deEstaEstimacion: number;
  totalEstimado: number;
  porEjecutar: number;
  precioUnitario: number;
  importe: number;

  constructor() {
    this.id = 0;
    this.clave = '';
    this.nombre = '';
    this.descripcion = '';
    this.unidad = '';
    this.costo_unitario = 0;
    this.cantidad = 0;
    this.frente_id = 0;
    this.segunProyecto = 0;
    this.hastaEstimacionAnterior = 0;
    this.deEstaEstimacion = 0;
    this.totalEstimado = 0;
    this.porEjecutar = 0;
    this.precioUnitario = 0;
    this.importe = 0;
  }
}
