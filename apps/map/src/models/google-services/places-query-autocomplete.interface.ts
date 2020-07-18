import { LatLngInterface } from '../map-view/lat-lng.interface';

export interface PredictionTerm {
  offset: number;
  value: string;
}

export interface PredictionSubstring {
  length: number;
  offset: number;
}

export interface AutocompleteStructuredFormatting {
  main_text: string;
  main_text_matched_substrings: PredictionSubstring[];
  secondary_text: string;
  secondary_text_matched_substrings?: PredictionSubstring[];
}

export interface PlacesQueryAutocompleteResponseInterface {
  description: string;
  id: string;
  matched_substrings: PredictionSubstring[];
  place_id: string;
  reference: string;
  structured_formatting: AutocompleteStructuredFormatting;
  terms: PredictionTerm[];
  types: string[];
}

export interface PlacesQueryAutocompleteRequestInterface {
  input: string;
  offset: number;
  location: LatLngInterface;
  radius: number;
  language: string;
}
