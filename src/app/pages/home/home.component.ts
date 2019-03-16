import { Component, OnInit } from '@angular/core'
import { MapTypeStyle } from '@agm/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = 46.058691
  lng = 6.576179

  mapStyles: MapTypeStyle[] = [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        {
          lightness: 32
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          saturation: -27.4
        },
        {
          lightness: 9.4
        },
        {
          gamma: 1
        },
        {
          hue: '#f1ff00'
        }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          hue: '#9FFF00'
        },
        {
          gamma: 1
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          hue: '#0099FF'
        },
        {
          saturation: -20
        },
        {
          lightness: 36.4
        },
        {
          gamma: 1
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#fbe339'
        }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#c0383e'
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        {
          hue: '#00FF4F'
        },
        {
          gamma: 1
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#fbe339'
        }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        {
          hue: '#FFB300'
        },
        {
          saturation: -38
        },
        {
          lightness: 11.2
        },
        {
          gamma: 1
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          hue: '#00B6FF'
        },
        {
          saturation: 4.2
        },
        {
          lightness: -63.4
        },
        {
          gamma: 1
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#daf1f4'
        }
      ]
    }
  ]

  showSidebar = true

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.showSidebar = true
  }
}
