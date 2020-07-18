import { createAction } from '@ngrx/store';

export enum MediaQueryActionsEnum {
  SetScreenWidthXs = '[Media Query] Set screen size xs.',
  SetScreenWidthSm = '[Media Query] Set screen size sm.',
  SetScreenWidthMd = '[Media Query] Set screen size md.',
  SetScreenWidthLg = '[Media Query] Set screen size lg.',
  SetScreenWidthXl = '[Media Query] Set screen size xl.',
}

export const setScreenWidthXs = createAction(
  MediaQueryActionsEnum.SetScreenWidthXs
);

export const setScreenWidthSm = createAction(
  MediaQueryActionsEnum.SetScreenWidthSm
);

export const setScreenWidthMd = createAction(
  MediaQueryActionsEnum.SetScreenWidthMd
);

export const setScreenWidthLg = createAction(
  MediaQueryActionsEnum.SetScreenWidthLg
);

export const setScreenWidthXl = createAction(
  MediaQueryActionsEnum.SetScreenWidthXl
);
