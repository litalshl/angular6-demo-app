import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
  });
}

}
