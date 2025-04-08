import { Component} from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {

 // Define URLs externas para todos los apartados
 private externalUrls: Record<'fundacion' | 'voluntario' | 'contactos' | 'web', string> = {
  fundacion: 'https://cgefoundation.org/somos/',
  voluntario: 'https://cgefoundation.org/ser-parte/',
  contactos: 'https://cgefoundation.org/contacto/',
  web: 'https://cgefoundation.org/', 
  };

  async goTo(pageIdentifier: 'fundacion' |'voluntario' |'contactos' | 'web') {
    console.log('Ir a:', pageIdentifier);

    // Verifica si el identificador tiene una URL asociada
    if (this.externalUrls[pageIdentifier]) {
      await Browser.open({ url: this.externalUrls[pageIdentifier] });
    } else {
      console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
    }
  }

}
