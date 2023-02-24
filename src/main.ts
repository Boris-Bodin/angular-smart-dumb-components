import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingRoutes } from '@core/app-routing.routes';
import { AppComponent } from '@core/components/app.component';
import { environment } from '@environment';
import 'zone.js/dist/zone';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(AppRoutingRoutes))],
}).catch((err) => console.error(err));
