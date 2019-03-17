import { Component, OnInit, Input } from '@angular/core'
import { Accident } from '../../../common/interfaces/accident'
import { AccidentService } from '../../../common/services/accident.service'

@Component({
  selector: 'app-accident-card',
  templateUrl: './accident-card.component.html',
  styleUrls: ['./accident-card.component.scss'],
  providers: [AccidentService]
})
export class AccidentCardComponent implements OnInit {
  @Input() accident: Accident

  carCount: number
  bikeCount: number
  personCount: number
  truckCount: number

  constructor(private accidentService: AccidentService) {}

  ngOnInit() {
    this.carCount = this.accident.vehicles.filter(
      (v: any) => v.name === 'car'
    ).length
    this.bikeCount = this.accident.vehicles.filter(
      (v: any) => v.name === 'bike'
    ).length
    this.personCount = this.accident.vehicles.filter(
      (v: any) => v.name === 'person'
    ).length
    this.truckCount = this.accident.vehicles.filter(
      (v: any) => v.name === 'truck'
    ).length
  }

  close(accident: Accident) {
    this.accidentService.close(accident.id).subscribe(res => {
      alert(`L'accident a été marqué comme traité`)
    })
  }
}
