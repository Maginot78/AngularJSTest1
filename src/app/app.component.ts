import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Test1 ' + VERSION.major;
}
