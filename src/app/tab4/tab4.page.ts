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
 private externalUrls: Record<'radio' | 'biblia', string> = {
  radio: 'https://zeno.fm/radio/rey-de-vida-online-rna0/',
  biblia: 'https://www.bible.com/es/bible/149/JHN.3.RVR1960',
  };

  async goTo(pageIdentifier: 'radio' |'biblia') {
    console.log('Ir a:', pageIdentifier);

    // Verifica si el identificador tiene una URL asociada
    if (this.externalUrls[pageIdentifier]) {
      await Browser.open({ url: this.externalUrls[pageIdentifier] });
    } else {
      console.log('Identificador no reconocido o sin URL definida:', pageIdentifier);
    }
  }

}
