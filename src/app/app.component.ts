import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public courseTitle = 'Angular Course';
  // private salary = 4000;
  //
  // public imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  //
  // public size = 50;
  //
  // public tag = this.domSanitizer.bypassSecurityTrustHtml('<span style="color: red">Some Tag text</span>');
  //
  // public user = {name: 'Ihor'};
  //
  // constructor(
  //   private readonly domSanitizer: DomSanitizer
  // ) {
  // }
  //
  // public getSalary(): number {
  //   return this.salary * 1.2;
  // }

  public onSideNavToggle(event: any): void {
    console.log('LOG!!!', event);
  }
}
