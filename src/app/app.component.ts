import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tutorial-nikki';
  auctionListTitle = 'this is an auction list (from variable)';

 public onAuctionListTitleClicked(event: Event): void {
    console.log(event);
  }
}
