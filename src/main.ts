import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app/app.component';
import appRoutes from './app/app.routing';
import { CustomSerializer } from './customs/custom-route-serializer';
import { importProvidersFrom } from '@angular/core';
import { metaReducers, rootReducers } from './app/store';
import { environment } from './environments/environment';
import { TodoEffects } from './app/store/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore(rootReducers, { metaReducers }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    provideRouterStore({ serializer: CustomSerializer }),
    provideEffects([TodoEffects]),
    importProvidersFrom(FormsModule, FontAwesomeModule),
  ],
}).catch((err) => console.log(err));
