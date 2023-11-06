import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
