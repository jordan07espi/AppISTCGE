import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: false,
})
export class ContactosPage { 


  contactLocations = [
    {
      title: 'Matriz Quito',
      address: 'Av. 10 de Agosto N35-108 e Ignacio San Maria', 
      schedule: 'Lunes a sábado de 08:00 a 17:00',
      phone: '0987067892', 
      email: 'secretaria@istcge.edu.ec',
      whatsappNumber: '593987067892' 
    },
    {
      title: 'Campus Santo Domingo',
      address: 'Calle Tulcán y 29 de mayo',
      schedule: 'Lunes a sábado de 08:00 a 17:00',
      phone: '0983099857', 
      email: 'santodomingo@istcge.edu.ec',
      whatsappNumber: '593983099857' 
    },
    {
      title: 'Campus El Quinche',
      address: 'Sector La Esperanza Panamericana Norte N4-148 y Guillermo Puga', 
      schedule: 'Lunes a viernes de 08:OO a 13:OO /17:OO a 20:OO',
      phone: '0992374830', 
      email: 'campusquinche@istcge.edu.ec',
      whatsappNumber: '593992374830' 
    },
    {
      title: 'Campus Cayambe',
      address: 'Troncal de la Sierra y calle Camino al sol', 
      schedule: 'Lunes a viernes de 09:OO a 17:OO.',
      phone: '0987281535', 
      email: 'campuscayambe@istcge.edu.ec',
      whatsappNumber: '593987281535' 
    },
    {
      title: 'Campus Machala',
      address: '8va Oeste entre Marcel Laniado y Kleber Franco', 
      schedule: 'Lunes a viernes de 08:OO a 13:OO /17:OO a 20:OO',
      phone: '0958883121', 
      email: 'campusmachala@istcge.edu.ec',
      whatsappNumber: '593958883121' 
    }

  ];

  constructor() { }

  // Método para abrir WhatsApp con un número específico
  async openWhatsAppForContact(phoneNumber: string) {
    if (!phoneNumber) {
      console.error('Número de WhatsApp no proporcionado.');
      return;
    }

    const message = 'Más información CGE 👍'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log('Abriendo WhatsApp:', whatsappUrl); 
    try {
      await Browser.open({ url: whatsappUrl });
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
    }
  }
}
