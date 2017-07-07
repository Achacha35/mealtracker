import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MealTrackerModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(MealTrackerModule);
