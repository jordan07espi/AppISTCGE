import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  // Define URLs externas para todos los apartados
  private externalUrls: Record<'sga' | 'correo' | 'campus' | 'office' | 'elibro' | 'soporte' | 'contactos' | 'denuncias', string> = {
    sga: 'https://istcge.academicok.com/',
    correo: 'https://login.microsoftonline.com/',
    campus: 'https://web.istcge.edu.ec/entorno-virtual-de-aprendizaje/',
    office: 'https://login.microsoftonline.com/',
    elibro: 'https://elibro.net/es/lc/tuinstituto/inicio',
    soporte: 'https://somoscge.com/soporte/', 
    contactos: 'https://web.istcge.edu.ec/contacto/', // URL para Contactos
    denuncias: 'https://web.istcge.edu.ec/denuncias/', // URL para Denuncias
  };

  async goTo(pageIdentifier: 'sga' | 'correo' | 'campus' | 'office' | 'elibro' | 'soporte' | 'contactos' | 'denuncias') {
    console.log('Ir a:', pageIdentifier);

    // Verifica si el identificador tiene una URL asociada
    if (this.externalUrls[pageIdentifier]) {
      await Browser.open({ url: this.externalUrls[pageIdentifier] });
    } else {
      console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
    }
  }
}