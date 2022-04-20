import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrls: ['./company-nav.component.scss']
})
export class CompanyNavComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
