import { mediaQueryReducer } from '~store/reducers/media-query/media-query.reducer';
import { initialMediaQueryState, MediaQueryStateInterface } from '~store/states/media-query/media-query.state';

describe('MediaQueryReducer', () => {

  it('should return default state for no action', () => {
    const initialState = initialMediaQueryState;
    const action = { type: null };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  it('should return default xs state for set screen size xs', () => {
    const initialState = initialMediaQueryState;
    const action = { type: '[Media Query] Set screen size xs.' };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(xsState);
  });

  it('should return default sm state for set screen size sm', () => {
    const initialState = initialMediaQueryState;
    const action = { type: '[Media Query] Set screen size sm.' };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(smState);
  });

  it('should return default md state for set screen size md', () => {
    const initialState = initialMediaQueryState;
    const action = { type: '[Media Query] Set screen size md.' };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(mdState);
  });

  it('should return default lg state for set screen size lg', () => {
    const initialState = initialMediaQueryState;
    const action = { type: '[Media Query] Set screen size lg.' };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(lgState);
  });

  it('should return default xl state for set screen size xl', () => {
    const initialState = initialMediaQueryState;
    const action = { type: '[Media Query] Set screen size xl.' };
    const state = mediaQueryReducer(initialState, action);

    expect(state).toEqual(xlState);
  });
});

// xs state
const xsState: MediaQueryStateInterface = {
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
};

// sm state
const smState: MediaQueryStateInterface = {
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
};

// md state
const mdState: MediaQueryStateInterface = {
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
};

// lg state
const lgState: MediaQueryStateInterface = {
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
};

// xl state
const xlState: MediaQueryStateInterface = {
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
};
