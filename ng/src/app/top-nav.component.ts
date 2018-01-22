import { Component, OnInit } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html'
})
export class TopNavComponent implements OnInit {

  env: any = environment;

  constructor() { }

  ngOnInit() {
  }

}
