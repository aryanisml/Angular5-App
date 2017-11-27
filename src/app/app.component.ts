import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { zoneService } from "./Services/zoneservice";
import { ZoneModle } from "./Services/zonemodel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Iappcomponent {


  //Property
  private values = 'ABC';
  private currentState = 'Current Value';

  //Constructor
  constructor(private _ngzone: NgZone, private _zoneService: zoneService, private _zoneModel: ZoneModle) { }

  // Page Load = OnInit
  ngOnInit() {
    window.winNgRef = window.winNgRef || {};
    window.winNgRef.callBackFunc = this.setValuesFunc.bind(this);
    this.setServiceValue();
  }

  // Clean up
  ngOnDestory() {
    window.winNgRef.callBackFunc=null;
  }

  //Events
  updateValue(): void {
    this.currentState = 'Update with Inside Zone';
    this.values = 'PQR';
    this.setServiceValue();

  }
  resetValue(): void {
    this.currentState = 'Current Value';
    this.values = 'ABC';
    this.setServiceValue();
  }
  reteriveValue() {
    let objVal = this._zoneService.getValues();
    alert(objVal.currentState + '' + objVal.currentValue);
  }

  //Private Function
  setValuesFunc(passingObj): void {
    this._ngzone.run(() => {
      this.currentState = 'Update with OutSide Zone';
      this.values = passingObj.values;

      this.setServiceValue();
    });
  }
  setServiceValue() {
    this._zoneModel.currentState = this.currentState;
    this._zoneModel.currentValue = this.values;
    this._zoneService.setValues(this._zoneModel);
  }

}
