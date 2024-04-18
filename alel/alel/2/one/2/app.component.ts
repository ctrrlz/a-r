import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  showCar: boolean = false;
  showAirplane: boolean = false;
  showShip: boolean = false;

  showCarInfo() {
    this.showCar = true;
    this.showAirplane = false;
    this.showShip = false;
  }

  showAirplaneInfo() {
    this.showCar = false;
    this.showAirplane = true;
    this.showShip = false;
  }

  showShipInfo() {
    this.showCar = false;
    this.showAirplane = false;
    this.showShip = true;
  }
}
