import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core'
import { MapTypeStyle } from '@agm/core'
import { Accident } from '../../../common/interfaces/accident'
import { AccidentService } from '../../../common/services/accident.service'
import { TimelineLite, Power2 } from 'gsap'

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.scss'],
  providers: [AccidentService]
})
export class AccidentListComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar') sidebarEl: ElementRef

  lat = 46.058691
  lng = 6.576179
  mapStyles: MapTypeStyle[] = []

  accidents: Accident[]
  interval: any

  showSidebar = false
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

  openSidebar() {
    const timeline = new TimelineLite()

    if (this.showSidebar) {
      timeline.to(this.sidebarEl.nativeElement, 0.5, {
        width: '0',
        ease: Power2.easeInOut
      })
    }

    timeline.to(this.sidebarEl.nativeElement, 0.5, {
      width: '530px',
      ease: Power2.easeInOut
    })
    this.showSidebar = true
  }

  closeSidebar() {
    const timeline = new TimelineLite()
    timeline.to(this.sidebarEl.nativeElement, 0.5, {
      width: '0',
      ease: Power2.easeInOut
    })
    this.showSidebar = false
  }
}
