import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string,
  marker: Marker,
  colorText: string,
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements OnInit {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

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

    //genera un color aleatorio
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    
    this.addMarker( lngLat, color );
  }

  addMarker( lngLat: LngLat, color:string ){
    if( !this.map ) return;

     //funcion para calcular el color del texto
     const contrastColor = (c: string)=>["#000","#fff"][~~([.299,.587,.114].reduce((r,v,i)=>parseInt(c.substr(i*2+1,2),16)*v+r,0)<128)];
 
     //definir el color del texto basado en el color del marcador
     const colorText = contrastColor(color);

    const marker = new Marker({
      color: color,
      draggable: true
    }).setLngLat( lngLat ).addTo( this.map );

    // this.markers.push({ color, marker });
    
    //agregar el color del texto al marcador
    this.markers.push({
      color,
      colorText,
      marker: marker
    });
  }

  deleteMarker( index: number){
    this.markers[index].marker.remove();
    this.markers.splice( index, 1);
  }
}
