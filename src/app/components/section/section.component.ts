import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {

  constructor() { }

  @Output() clickButton = new EventEmitter();
  public statusButton = false;
  
  ngOnInit() {}

  public changeStatus(){
    if(this.statusButton){
      this.statusButton = false;
    }
    else {
      this.statusButton = true;
    }
    this.clickButton.emit( {clickNow: this.statusButton} );
  }

}
