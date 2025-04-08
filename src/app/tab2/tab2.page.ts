import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

 // Define URLs externas para todos los apartados
 private externalUrls: Record<'email' | 'eva' |'sedes' | 'denuncias' | 'contactos' | 'egresados' | 'notas' | 'web', string> = {
    email: 'https://webmail.cge.ec/',
    eva: 'https://evacge.com/login/index.php',
    sedes: 'https://cge.ec/mapa/',
    denuncias: 'https://cge.ec/denuncias/',
    contactos: 'https://cge.ec/contacto/',
    egresados: 'https://ve.cge.ec/',
    notas: 'https://ve.cge.ec/', 
    web: 'https://cge.ec/', 
  };

  async goTo(pageIdentifier: 'email' |'eva' | 'sedes' | 'denuncias' | 'contactos' | 'egresados' | 'notas' | 'web') {
    console.log('Ir a:', pageIdentifier);

    // Verifica si el identificador tiene una URL asociada
    if (this.externalUrls[pageIdentifier]) {
      await Browser.open({ url: this.externalUrls[pageIdentifier] });
    } else {
      console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
    }
  }

}
