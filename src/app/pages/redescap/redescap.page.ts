import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-redescap',
  templateUrl: './redescap.page.html',
  styleUrls: ['./redescap.page.scss'],
  standalone: false,
})
export class RedescapPage  {

  private externalUrls: Record<'facebook' | 'instagram'| 'x'| 'tiktok' , string> = {
  facebook: 'https://www.facebook.com/cge.ec',
  instagram: 'https://www.instagram.com/cge.ec',
  x: 'https://x.com/cgeecuador',
  tiktok: 'https://www.tiktok.com/@cge.ec',
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
