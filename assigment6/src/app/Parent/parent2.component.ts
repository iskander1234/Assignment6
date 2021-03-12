import { Component } from '@angular/core';
import {SharedService} from '../Service/shared.service';


@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  providers : [SharedService]
})
export class Parent2Component
{

  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent-2 ' + this.sharedValue.toString());
  }
}
