import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

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

    //MÉTODO para abrir WhatsApp
    async openWhatsApp() {
      const phoneNumber = '593982246028'; 
      const message = 'Más información CGE 👍';
      //mensaje para la URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
      try {
        await Browser.open({ url: whatsappUrl });
      } catch (error) {
        console.error('Error al abrir WhatsApp:', error);
      }
    }
}
