import { Component, OnInit, OnDestroy } from '@angular/core'
import { MapTypeStyle } from '@agm/core'
import { Accident } from '../../../common/interfaces/accident'
import { AccidentService } from '../../../common/services/accident.service'

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.scss'],
  providers: [AccidentService]
})
export class AccidentListComponent implements OnInit, OnDestroy {
  lat = 46.058691
  lng = 6.576179

  accidents: Accident[]
  interval: any

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
  constructor(private accidentService: AccidentService) {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.accidentService.list().subscribe((res: Accident[]) => {
        this.accidents = res
      })
    }, 2000)
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }
}
