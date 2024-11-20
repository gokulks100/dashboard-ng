import { Component, HostBinding, HostListener, Input, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
    // '(click)' : 'onSubmit()'
  }

})
export class ControlComponent {

//  @HostBinding('class') className = 'control'

  @HostListener('click') onClick() {
    console.log('clicked');

  }

   @Input() label!:String;


   onSubmit()
   {
    console.log('clicked');

   }

}
