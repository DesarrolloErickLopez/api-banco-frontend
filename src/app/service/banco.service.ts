import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

constructor() { }

realizarRetiro(banco: string, noTarjeta: string, nip: string, monto: number) {
 
  console.log('Información recibida en el servicio:');
  console.log('Banco:', banco);
  console.log('No Tarjeta:', noTarjeta);
  console.log('NIP:', nip);
  console.log('Monto:', monto);

}

}
