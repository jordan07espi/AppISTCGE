import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  private readonly WHATSAPP_NUMBER = environment.mainWhatsAppNumber; 
  private readonly WHATSAPP_MESSAGE = 'Más información CGE 👍';

  constructor() {}

  async openWhatsApp() {
    const encodedMessage = encodeURIComponent(this.WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
    try {
      console.log('Abriendo WhatsApp desde TabsPage:', whatsappUrl); 
      await Browser.open({ url: whatsappUrl });
    } catch (error) {
      console.error('Error al abrir WhatsApp desde TabsPage:', error); 
    }
  }
}
