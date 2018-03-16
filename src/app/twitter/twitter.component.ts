import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://twitter.com/vebSiteX';
  }

}
