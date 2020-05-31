import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedState } from './shared/store/shared.state'
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clients-crud';

  @Select(SharedState.loading)
  loading$: Observable<boolean>;

  constructor(private spinnerService: NgxSpinnerService) {}

  ngOnInit() {
    this.loading$.subscribe(loading => {
      loading ? this.spinnerService.show() : this.spinnerService.hide();
    });
  }

}
