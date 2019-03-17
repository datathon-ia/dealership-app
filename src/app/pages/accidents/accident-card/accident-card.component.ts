import { Component, OnInit, Input } from '@angular/core'
import { Accident } from '../../../common/interfaces/accident'

@Component({
  selector: 'app-accident-card',
  templateUrl: './accident-card.component.html',
  styleUrls: ['./accident-card.component.scss']
})
export class AccidentCardComponent {
  @Input() accident: Accident
}
