import { Component, OnInit } from '@angular/core';
import { InsharedService } from '../../services/inshared.service';

@Component({
  selector: 'app-currencyrates',
  templateUrl: './currencyrates.component.html',
  styleUrls: ['./currencyrates.component.css']
})
export class CurrencyratesComponent implements OnInit {
  curDetail:  any;

  constructor(private currencyService: InsharedService) { }

  ngOnInit() {
  }

  SearchCurrency(formData) {
    this.currencyService.getCurrenceyService(formData.searchstring)
      .subscribe(result => {
        this.curDetail = result.rates;
      })
  }

}
