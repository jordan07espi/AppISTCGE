import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-tutoriales',
  templateUrl: './tutoriales.page.html',
  styleUrls: ['./tutoriales.page.scss'],
  standalone: false,
})
export class TutorialesPage {

  private campusUrls: Record<'general' |'teams' | 'reunionteams' | 'moodle' | 'campusvirtual' | 'perfil' | 'tarea'| 'prueba'| 'pago'| 'pagosga', string> = {
    general: 'https://web.istcge.edu.ec/tutoriales', 
    teams: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/1-como-ingresar-al-teams.mp4', 
    reunionteams: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/2-como-ingresar-a-una-reunion-en-teams.mp4',     
    moodle: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/3-como-ingresar-a-moodle-campus-virtual.mp4',         
    campusvirtual: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/4-Navegacion-por-el-campus-virtual.mp4',         
    perfil: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/5-Actualizacion-del-Perfil-en-el-campus-virtual.mp4',
    tarea: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/6-Como-entregar-una-tarea-en-el-campus-virtual.mp4',
    prueba: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/7-Como-ingresar-a-una-prueba-o-leccion-en-el-campus-virtual.mp4',
    pago: 'https://web.istcge.edu.ec/wp-content/uploads/2023/10/8-pago-online.mp4',
    pagosga: 'https://web.istcge.edu.ec/wp-content/uploads/2024/01/Registrar-pagos-en-el-SGA-subtitulos-2.mp4',      
  };

  constructor() {}

  async goTo(campusIdentifier:'general' | 'teams' | 'reunionteams' | 'moodle' | 'campusvirtual' | 'perfil' | 'tarea'| 'prueba'| 'pago'| 'pagosga') {
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
