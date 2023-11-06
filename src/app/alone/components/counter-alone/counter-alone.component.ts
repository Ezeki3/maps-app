import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent implements OnInit {

  @Input()
  public counter: number = 10

  constructor() { }

  ngOnInit(): void {
  }


}
