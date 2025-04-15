import { Component} from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-redesfun',
  templateUrl: './redesfun.page.html',
  styleUrls: ['./redesfun.page.scss'],
  standalone: false,
})
export class RedesfunPage  {

  private externalUrls: Record<'facebook' | 'instagram'| 'correo' , string> = {
    facebook: 'https://www.facebook.com/cgefundacion',
    instagram: 'https://www.instagram.com/fundacioncge',
    correo: 'https://cgefoundation.org/contacto',
    };
  
    async goTo(pageIdentifier: 'facebook' |'instagram'| 'correo') {
      console.log('Ir a:', pageIdentifier);
  
      // Verifica si el identificador tiene una URL asociada
      if (this.externalUrls[pageIdentifier]) {
        await Browser.open({ url: this.externalUrls[pageIdentifier] });
      } else {
        console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
      }
    }
  
}
