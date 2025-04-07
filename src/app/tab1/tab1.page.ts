import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
// Importa NavController si vas a navegar a otras páginas de la app
// import { NavController } from '@ionic/angular'; 
// Importa Browser de Capacitor si vas a abrir enlaces externos
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false, 
})
export class Tab1Page {

  // Inyecta Router en el constructor
  constructor(private router: Router) {}

  // Define URLs externas (opcional pero recomendado)
  private externalUrls = {
    correo: 'https://correo.instituto.com', // Reemplaza con la URL real
    campus: 'https://campus-virtual.instituto.com', // Reemplaza con la URL real
    office: 'https://www.office.com/', // Reemplaza con la URL real
    elibro: 'https://elibro.net/es/lc/tuinstituto/inicio', // Reemplaza con la URL real
  };


  async goTo(pageIdentifier: string) { // Marca la función como async si usas await
    console.log('Ir a:', pageIdentifier);

    switch (pageIdentifier) {
      // --- Casos para Páginas Internas ---
      case 'sga':
        this.router.navigateByUrl('/sga'); // Usa la ruta definida en app-routing.module.ts
        break;
      case 'soporte': // Asumo que 'soporte' navega a 'soporte-tecnico'
        this.router.navigateByUrl('/soporte-tecnico');
        break;
      case 'contactos':
         this.router.navigateByUrl('/contactos');
        break;
      case 'denuncias':
        this.router.navigateByUrl('/denuncias');
        break;

      // --- Casos para Enlaces Externos (usando Capacitor Browser) ---
      case 'correo':
        await Browser.open({ url: this.externalUrls.correo });
        break;
      case 'aula-virtual': // Asumo que 'aula-virtual' es el campus
         await Browser.open({ url: this.externalUrls.campus });
        break;
      case 'office':
        await Browser.open({ url: this.externalUrls.office });
        break;
      case 'biblioteca': // Asumo que 'biblioteca' es el eLibro
        await Browser.open({ url: this.externalUrls.elibro });
        break;

      default:
        console.log('Identificador no reconocido o sin acción definida:', pageIdentifier);
    }
  }
}