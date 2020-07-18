import { Pagination } from '../services/pagination';

export class SocialMediaHyperlink {
  src: string;
  alt: string;
  href: string;

  constructor(
    src: string,
    alt: string,
    href: string
  ) {
    this.src = src;
    this.alt = alt;
    this.href = href;
  }
}

export class InternalLink {
  routerLink: string;
  text: string;

  constructor(
    routerLink: string,
    text: string
  ) {
    this.routerLink = routerLink;
    this.text = text;
  }
}

export class SocialMediaHyperlinkResponse extends Pagination {
  results: SocialMediaHyperlink[];

  constructor(
    count: number,
    previous: string,
    next: string,
    results: SocialMediaHyperlink[]
  ) {
    super(
      count,
      previous,
      next
    );
    this.results = results;
  }

  getResults(): SocialMediaHyperlink[] {
    return this.results;
  }
}
