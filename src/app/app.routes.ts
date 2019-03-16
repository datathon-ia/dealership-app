import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { AccidentListComponent } from './pages/accidents/accident-list/accident-list.component'
export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accident-list',
    component: AccidentListComponent
  }
]
