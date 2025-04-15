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
  private externalUrls: Record<'sga' | 'correo' | 'office' | 'elibro' | 'soporte' | 'denuncias', string> = {
    sga: 'https://istcge.academicok.com/',
    correo: 'https://login.microsoftonline.com/',
    office: 'https://login.microsoftonline.com/',
    elibro: 'https://elibro.net/es/lc/istcge/login_usuario/?next=/es/lc/istcge/inicio/?referrerpolicy=%22unsafe-url%22',
    soporte: 'https://somoscge.com/soporte/', 

    denuncias: 'https://web.istcge.edu.ec/denuncias/', // URL para Denuncias
  };

  async goTo(pageIdentifier: 'sga' | 'correo' | 'office' | 'elibro' | 'soporte' | 'denuncias') {
    console.log('Ir a:', pageIdentifier);

    // Verifica si el identificador tiene una URL asociada
    if (this.externalUrls[pageIdentifier]) {
      await Browser.open({ url: this.externalUrls[pageIdentifier] });
    } else {
      console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
    }
  }

}