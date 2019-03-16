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
  mapStyles: MapTypeStyle[] = []

  accidents: Accident[]
  interval: any

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

  openModal(m: any, event, any) {
    console.log(m, event)
  }
}
