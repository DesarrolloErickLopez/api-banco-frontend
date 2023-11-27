import { Injectable } from '@angular/core';
import { Banco } from '../modelos/banco';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

constructor() { }


Retiro(datos: Banco) {
  const { banco, noTarjeta, nip, monto } = datos;

  console.log('Información recibida en el servicio:');
  console.log('Banco:', banco);
  console.log('No Tarjeta:', noTarjeta);
  console.log('NIP:', nip);
  console.log('Monto:', monto);
}
}