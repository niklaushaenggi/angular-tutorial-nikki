import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Auction} from '../shared/auction';
import {AUCTION_DATA} from '../shared/auction-data';
import {AuctionDataService} from '../shared/auction-data.service';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  @Input() headerTitle: string;

  @Output() titleClicked = new EventEmitter<string>();

  auctions: Auction[] = AUCTION_DATA;
  auctionsObservable: Observable<Auction[]>;
  auctionSubscription: Subscription;



  onTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit('Title clicked');
  }

  constructor(private auctionDataService: AuctionDataService) {
  //  this.auctions = auctionDataService.getAuctions();
  }

  ngOnInit(): void {
    this.auctionsObservable = this.auctionDataService.getHttpAuctions();
    this.auctionSubscription = this.auctionsObservable.subscribe(data => this.auctions = data);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.auctionSubscription.unsubscribe();
  }

}
