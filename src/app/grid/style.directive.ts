import { Directive, Renderer, Input, OnInit } from "@angular/core";
import { ElementRef } from '@angular/core';

@Directive({
    selector:"[styleDirective]"
})
export class styleDirective implements OnInit{
    @Input('styleDirective') color:string;
    constructor(private el:ElementRef , private renderer:Renderer){
       
    }
    ngOnInit(){
        let colorValue = this.color == "" ? '': this.color;
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', colorValue);
        
        
    }
}