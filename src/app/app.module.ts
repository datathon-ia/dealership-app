import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { AccidentListComponent } from './pages/accidents/accident-list/accident-list.component'
import { AccidentCardComponent } from './pages/accidents/accident-card/accident-card.component'
import { HeaderComponent } from './partials/header/header.component'
import { appRoutes } from './app.routes'

import { AgmCoreModule } from '@agm/core'
import { SidebarComponent } from './partials/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccidentListComponent,
    AccidentCardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKsTSVaMTTtKUIM39lok0W9r2Y2fXkSu4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
