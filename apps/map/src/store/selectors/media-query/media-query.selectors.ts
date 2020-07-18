import { createSelector } from '@ngrx/store';
import { MediaQueryStateInterface } from '~store/states/media-query/media-query.state';
import { AppStateInterface } from '~store/states/app/app.state';

const mediaQueryState = (state: AppStateInterface) => state.mediaQuery;

export const selectScreenWidthIsXs = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.xs
);

export const selectScreenWidthIsSm = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.sm
);

export const selectScreenWidthIsMd = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.md
);

export const selectScreenWidthIsLg = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.lg
);

export const selectScreenWidthIsXl = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.xl
);

// Gt
export const selectScreenWidthIsGtXs = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.gt_xs
);

export const selectScreenWidthIsGtSm = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.gt_sm
);

export const selectScreenWidthIsGtMd = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.gt_md
);

export const selectScreenWidthIsGtLg = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.gt_lg
);

// Lt
export const selectScreenWidthIsLtSm = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.lt_sm
);

export const selectScreenWidthIsLtMd = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.lt_md
);

export const selectScreenWidthIsLtLg = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.lt_lg
);

export const selectScreenWidthIsLtXl = createSelector(
  mediaQueryState,
  (state: MediaQueryStateInterface) => state.lt_xl
);
