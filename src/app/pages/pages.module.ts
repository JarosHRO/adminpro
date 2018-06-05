import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graphics1Component,
        ProgressComponent
    ],
    exports:  [
        DashboardComponent,
        Graphics1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
     ]
})

export class PagesModule { }
