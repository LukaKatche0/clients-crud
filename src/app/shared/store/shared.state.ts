import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SharedActions } from './shared.state.actions';
import { SharedStateModel } from './shared.state.model';
import { Injectable } from '@angular/core';

@State<SharedStateModel>({
  name: 'shared',
  defaults: {
    appLoading: false
  }
})

@Injectable()
export class SharedState {

  @Action(SharedActions.ShowLoader)
  public showLoaderAction(ctx: StateContext<SharedStateModel>) {
    ctx.setState({ appLoading: true });
  }

  @Action(SharedActions.HideLoader)
  public hideLoaderAction(ctx: StateContext<SharedStateModel>) {
    ctx.setState({ appLoading: false });
  }

  @Selector()
  static loading(state: SharedStateModel) {
    return state.appLoading;
  }
}