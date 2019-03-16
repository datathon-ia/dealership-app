import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 46.058691
  lng = 6.576179

  showSidebar = false

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.showSidebar = true
  }
}
