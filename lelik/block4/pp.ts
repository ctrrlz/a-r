import { Component } from '@angular/core';
import {PercentPipe, CurrencyPipe} from '@angular/common';
import {NgIf, NgFor, NgSwitch} from '@angular/common'
//import { Pipe, PipeTransform } from '@angular/core';
@Component({
    selector: 'smt',
    imports: [CurrencyPipe, PercentPipe, NgIf, NgFor, NgSwitch],
    template: `
    <div>{{phone}}</div>
    <div>{{town}}</div>
    <div>{{zp | currency}}</div>
    <div>{{prime | percent}}</div>`
})
export class AppComponent{
zp: number = 1400;
prime: number = 0.14;
}
