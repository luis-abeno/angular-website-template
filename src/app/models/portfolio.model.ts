import { I18nModel } from './i18n.model';

export type PortfolioItem = {
  title: I18nModel;
  description: I18nModel;
  stack: Array<string>;
  images: Array<string>;
};
