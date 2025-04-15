import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  // Definir constantes para el número y mensaje (opcional pero buena práctica)
  private readonly WHATSAPP_NUMBER = '593982246028';
  private readonly WHATSAPP_MESSAGE = 'Más información CGE 👍';

  constructor() {}

  async openWhatsApp() {
    const encodedMessage = encodeURIComponent(this.WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/<span class="math-inline">\{this\.WHATSAPP\_NUMBER\}?text\=</span>{encodedMessage}`;

    try {
      console.log('Abriendo WhatsApp desde TabsPage:', whatsappUrl); 
      await Browser.open({ url: whatsappUrl });
    } catch (error) {
      console.error('Error al abrir WhatsApp desde TabsPage:', error); 
    }
  }

}
