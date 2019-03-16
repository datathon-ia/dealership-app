import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { AccidentListComponent } from './pages/accidents/accident-list/accident-list.component'
import { AccidentCardComponent } from './pages/accidents/accident-card/accident-card.component'
import { HeaderComponent } from './partials/header/header.component'
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccidentListComponent,
    AccidentCardComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
