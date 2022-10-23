import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-authLib',
  template: `
    <p>
      Generic Auth Lib works!
    </p>
  `,
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
