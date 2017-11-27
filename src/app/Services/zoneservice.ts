import { Injectable} from "@angular/core";
import { ZoneModle  } from "./zonemodel";

@Injectable()
export class zoneService implements Izoneservice{
  
    constructor(private dataModle:ZoneModle){}

    getValues(){
        return this.dataModle;
    }
    setValues(value):void{
        this.dataModle.currentState=value.currentState;
        this.dataModle.currentValue=value.currentValue;
    }


}