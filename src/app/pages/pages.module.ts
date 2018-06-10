import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Modulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementComponent } from '../components/increment/increment.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { GraphicsDonaComponent } from '../components/graphics-dona/graphics-dona.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graphics1Component,
        ProgressComponent,
        IncrementComponent,
        GraphicsDonaComponent
    ],
    exports:  [
        DashboardComponent,
        Graphics1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
     ]
})

export class PagesModule { }
