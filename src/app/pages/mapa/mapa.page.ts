import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var mapboxgl: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {

  lat: number;
  lng: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let geo: any = this.route.snapshot.paramMap.get('geo');
    geo = geo.substring(4);
    geo = geo.split(',');

    this.lat = Number(geo[0]);
    this.lng = Number(geo[1]);

    console.log(this.lat, this.lng);
  }
  
  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZm9uZW1peCIsImEiOiJja2dwdG92czQwcXY3MnlzMzZmZGZhbzI0In0.kXTTFcDj5smM9bA27v1cSA'
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.lng, this.lat],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });

    map.on('load', ()=> {
      map.resize();
      new mapboxgl.Marker({

      })
      .setLngLat([this.lng, this.lat])
      .addTo(map);

      const layers = map.getStyle().layers;

      let labelLayerId;
      for(let i = 0; i < layers.length; i++) {
        if(layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom':15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId);
    });
  }
}
