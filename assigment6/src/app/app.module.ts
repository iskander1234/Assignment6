import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Child3Component} from './Child/child3.component';
import {SharedService} from './Service/shared.service';
import {Child2Component} from './Child/child2.component';
import {Child1Component} from './Child/child1.component';
import {Parent2Component} from './Parent/parent2.component';
import {Parent1Component} from './Parent/parent1.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
