import { Component} from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.page.html',
  styleUrls: ['./redes.page.scss'],
  standalone: false,
})
export class RedesPage  {

  private externalUrls: Record<'facebook' | 'instagram'| 'x'| 'tiktok' , string> = {
    facebook: 'https://www.facebook.com/istcge.edu.ec',
    instagram: 'https://www.instagram.com/istcge.ec/',
    x: 'https://x.com/ISTE_ec',
    tiktok: 'https://www.tiktok.com/@istcge.edu.ec',
    };
  
    async goTo(pageIdentifier: 'facebook' |'instagram'| 'x'| 'tiktok') {
      console.log('Ir a:', pageIdentifier);
  
      // Verifica si el identificador tiene una URL asociada
      if (this.externalUrls[pageIdentifier]) {
        await Browser.open({ url: this.externalUrls[pageIdentifier] });
      } else {
        console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
      }
    }

}
