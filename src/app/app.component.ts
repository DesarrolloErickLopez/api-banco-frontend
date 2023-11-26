import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BancoService } from './service/banco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  imports: [CommonModule, RouterOutlet,FormsModule] 
})

export class AppComponent {

  title = 'Banco';
  banco: string = '';
  noTarjeta: string = '';
  nip: string = '';
  monto: number | null = null;
  mensajeFinalizacion: string = '';
  camposLlenos: boolean = true;
  mensaje: string = '';

  constructor(private bancoService: BancoService) { }

  validarSoloLetras(event: KeyboardEvent) {
    const pattern = /[a-zA-Z]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  validarSoloNumeros(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  realizarRetiro() {
    if (this.banco && this.noTarjeta && this.nip && this.monto !== null) {
      console.log('Esta es la info que llega al component:');
      console.log('Banco:', this.banco);
      console.log('No Tarjeta:', this.noTarjeta);
      console.log('NIP:', this.nip);
      console.log('Monto:', this.monto);
      const datosEnviados = this.bancoService.realizarRetiro(this.banco, this.noTarjeta, this.nip, this.monto);
      
      console.log('Datos enviados al servicio:', datosEnviados);

     
    } else {
      this.mensajeFinalizacion = 'Saldo insuficiente';
    }
  }



}



