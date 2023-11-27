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
    if (this.banco.trim() !== '' && this.noTarjeta.trim() !== '' && this.nip.trim() !== '' && this.monto !== null) {
      this.bancoService.Retiro({
        banco: this.banco,
        noTarjeta: this.noTarjeta,
        nip: this.nip,
        monto: this.monto,
      });
    }
  }
}






