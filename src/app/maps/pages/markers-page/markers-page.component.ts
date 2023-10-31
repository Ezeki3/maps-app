import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements OnInit {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-104.73395034880717, 39.79945571223877)

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: 10, // starting zoom
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'PUNTO'
    // // markerHtml.style.backgroundImage = "url('/assets/images/marker_red.png')";

    // const marker = new Marker({
    //   color: "red",
    //   // element: markerHtml
    // }).setLngLat(this.currentLngLat).addTo(this.map);

  }

  createMarker() {
    if (!this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    
    this.addMarker( lngLat, color );
  }

  addMarker( lngLat: LngLat, color:string ){
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    }).setLngLat( lngLat ).addTo( this.map );
  }
}
