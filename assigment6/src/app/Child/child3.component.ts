import { Component } from '@angular/core';
import {SharedService} from '../Service/shared.service';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  providers : []
})

export class Child3Component
{
  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-3 ' + this.sharedValue.toString());
  }
}
