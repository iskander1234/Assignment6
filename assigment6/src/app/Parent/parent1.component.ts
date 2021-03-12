import { Component } from '@angular/core';
import {SharedService} from '../Service/shared.service';


@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  providers : []
})
export class Parent1Component
{
  sharedValue;

  constructor(private sharedService: SharedService){
    this.sharedValue = sharedService.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }
}
