import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { TableStateModel } from './table.state.model';
import { SetPage } from './table.state.actions';

@State<TableStateModel>({
  name: 'table',
  defaults: {
    page: 1,
  }
})

@Injectable()
export class TableState {

  @Action(SetPage)
  public setPage(ctx: StateContext<TableStateModel>, action: SetPage) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      page: action.page}
    );
  }

  @Selector()
  static page(state: TableStateModel) {
    return state.page;
  }
}