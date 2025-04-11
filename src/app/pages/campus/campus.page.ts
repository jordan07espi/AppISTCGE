import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.page.html',
  styleUrls: ['./campus.page.scss'],
  standalone: false,
})
export class CampusPage { // Cambiado de CampusVirtualPage a CampusPage
  private campusUrls: Record<'afrodita' | 'hermes' | 'hera' | 'zeus' | 'apolo', string> = {
    afrodita: 'https://afrodita.istcge.edu.ec/campus/login/index.php', 
    hermes: 'https://hermes.istcge.edu.ec/campus/login/index.php',     
    hera: 'https://hera.istcge.edu.ec/campus/login/index.php',         
    zeus: 'https://zeus.istcge.edu.ec/campus/login/index.php',         
    apolo: 'https://apolo.istcge.edu.ec/campus/login/index.php',       
  };

  constructor() {}

  async openCampus(campusIdentifier: 'afrodita' | 'hermes' | 'hera' | 'zeus' | 'apolo') {
    console.log('Abriendo campus:', campusIdentifier);
    const url = this.campusUrls[campusIdentifier];
    if (url && url !== 'URL_DEL_CAMPUS_...') {
      try {
        await Browser.open({ url: url });
      } catch (error) {
        console.error(`Error al abrir ${campusIdentifier}:`, error);
      }
    } else {
      console.warn('URL no definida o es placeholder para:', campusIdentifier);
    }
  }
}