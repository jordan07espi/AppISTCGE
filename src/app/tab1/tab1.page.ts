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
  private externalUrls: Record<'sga' | 'correo' | 'office' | 'elibro' | 'soporte' | 'contactos' | 'denuncias', string> = {
    sga: 'https://istcge.academicok.com/',
    correo: 'https://login.microsoftonline.com/',
    office: 'https://login.microsoftonline.com/',
    elibro: 'https://elibro.net/es/lc/istcge/login_usuario/?next=/es/lc/istcge/inicio/?referrerpolicy=%22unsafe-url%22',
    soporte: 'https://somoscge.com/soporte/', 
    contactos: 'https://web.istcge.edu.ec/contacto/', // URL para Contactos
    denuncias: 'https://web.istcge.edu.ec/denuncias/', // URL para Denuncias
  };

  async goTo(pageIdentifier: 'sga' | 'correo' | 'office' | 'elibro' | 'soporte' | 'contactos' | 'denuncias') {
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