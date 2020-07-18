export interface MediaQueryStateInterface {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  lt_sm: boolean;
  lt_md: boolean;
  lt_lg: boolean;
  lt_xl: boolean;
  gt_xs: boolean;
  gt_sm: boolean;
  gt_md: boolean;
  gt_lg: boolean;
}

export const initialMediaQueryState: MediaQueryStateInterface = null;

export function getInitialState(): MediaQueryStateInterface {
  return initialMediaQueryState;
}
