import { Action, createReducer, on } from '@ngrx/store';
import { initialMediaQueryState, MediaQueryStateInterface } from '~store/states/media-query/media-query.state';
import {
  setScreenWidthLg,
  setScreenWidthMd,
  setScreenWidthSm,
  setScreenWidthXl,
  setScreenWidthXs
} from '~store/actions/media-query/media-query.actions';


const MEDIA_QUERY_REDUCER = createReducer(
  initialMediaQueryState,
  on(setScreenWidthXl, (state) => ({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: true,
    lt_sm: false,
    lt_md: false,
    lt_lg: false,
    lt_xl: false,
    gt_xs: true,
    gt_sm: true,
    gt_md: true,
    gt_lg: true
  })),
  on(setScreenWidthLg, (state) => ({
    xs: false,
    sm: false,
    md: false,
    lg: true,
    xl: false,
    lt_sm: false,
    lt_md: false,
    lt_lg: false,
    lt_xl: true,
    gt_xs: true,
    gt_sm: true,
    gt_md: true,
    gt_lg: false
  })),
  on(setScreenWidthMd, (state) => ({
    xs: false,
    sm: false,
    md: true,
    lg: false,
    xl: false,
    lt_sm: false,
    lt_md: false,
    lt_lg: true,
    lt_xl: true,
    gt_xs: true,
    gt_sm: true,
    gt_md: false,
    gt_lg: false
  })),
  on(setScreenWidthSm, (state) => ({
    xs: false,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    lt_sm: false,
    lt_md: true,
    lt_lg: true,
    lt_xl: true,
    gt_xs: true,
    gt_sm: false,
    gt_md: false,
    gt_lg: false
  })),
  on(setScreenWidthXs, (state) => ({
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    lt_sm: true,
    lt_md: true,
    lt_lg: true,
    lt_xl: true,
    gt_xs: false,
    gt_sm: false,
    gt_md: false,
    gt_lg: false
  }))
);

export function mediaQueryReducer(state: MediaQueryStateInterface | undefined, action: Action) {
  return MEDIA_QUERY_REDUCER(state, action);
}
