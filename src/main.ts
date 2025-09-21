import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

// Importar iconos de Ionicons
import { addIcons } from 'ionicons';
import {
  americanFootballOutline,
  alertCircleOutline,
  beakerOutline,
  radioButtonOffOutline,
  cardOutline,
  checkmarkCircleOutline,
  calendarOutline,
  carOutline,
  gridOutline,
  infiniteOutline,
  hammerOutline,
  listOutline,
  reorderThreeOutline,
  refreshCircleOutline,
  phonePortraitOutline,
  tabletPortraitOutline,
  personOutline,
  codeWorkingOutline,
  snowOutline,
  sunnyOutline,
  arrowDownCircleOutline,
  searchOutline,
  copyOutline,
  albumsOutline
} from 'ionicons/icons';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Registrar todos los iconos globalmente
addIcons({
  'american-football-outline': americanFootballOutline,
  'alert-circle-outline': alertCircleOutline,
  'beaker-outline': beakerOutline,
  'radio-button-off-outline': radioButtonOffOutline,
  'card-outline': cardOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'calendar-outline': calendarOutline,
  'car-outline': carOutline,
  'grid-outline': gridOutline,
  'infinite-outline': infiniteOutline,
  'hammer-outline': hammerOutline,
  'list-outline': listOutline,
  'reorder-three-outline': reorderThreeOutline,
  'refresh-circle-outline': refreshCircleOutline,
  'phone-portrait-outline': phonePortraitOutline,
  'tablet-portrait-outline': tabletPortraitOutline,
  'person-outline': personOutline,
  'code-working-outline': codeWorkingOutline,
  'snow-outline': snowOutline,
  'sunny-outline': sunnyOutline,
  'arrow-down-circle-outline': arrowDownCircleOutline,
  'search-outline': searchOutline,
  'copy-outline': copyOutline,
  'albums-outline': albumsOutline
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ],
});
