import { Component } from '@angular/core';
import {SharedService} from '../Service/shared.service';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  providers : []
})
export class Child1Component
{
  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-1 ' + this.sharedValue.toString());
  }
}

