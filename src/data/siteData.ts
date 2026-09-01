import {
  NAV_MENU_ITEMS,
  NEWS_POSTS,
  VALUES_ACCORDION_ITEMS,
  GALLERY_PHOTOS,
  TEAM_MEMBERS,
} from './aboutOverviewData';
import {
  CIRCULAR_OFFERINGS,
  MAGAZINE_ARTICLES,
  POLICY_FOCUS_ITEMS,
  EXPERTISE_ITEMS,
  INDUSTRY_SOLUTIONS,
  ESG_FOCUS_AREAS,
  SIX_PILLARS,
  FOUR_VALUES,
} from './climateData';
import { DEFAULT_WEBSITE_DATA, type WebsiteData } from './defaultContent';
import { primaryNav, defaultNavbarConfig } from './navigationData';
import {
  NavMenuItem,
  NewsPost,
  ValueAccordionItem,
  GalleryPhoto,
  TeamMember,
} from '../types/aboutOverviewTypes';

export {
  NAV_MENU_ITEMS,
  NEWS_POSTS,
  VALUES_ACCORDION_ITEMS,
  GALLERY_PHOTOS,
  TEAM_MEMBERS,
};

export {
  CIRCULAR_OFFERINGS,
  MAGAZINE_ARTICLES,
  POLICY_FOCUS_ITEMS,
  EXPERTISE_ITEMS,
  INDUSTRY_SOLUTIONS,
  ESG_FOCUS_AREAS,
  SIX_PILLARS,
  FOUR_VALUES,
};

export { DEFAULT_WEBSITE_DATA, type WebsiteData };
export { primaryNav, defaultNavbarConfig };

export interface SiteDataExport {
  navigation: {
    menuItems: NavMenuItem[];
    primaryNav: typeof primaryNav;
    defaultConfig: typeof defaultNavbarConfig;
  };
  about: {
    newsPosts: NewsPost[];
    values: ValueAccordionItem[];
    gallery: GalleryPhoto[];
    teamMembers: TeamMember[];
  };
  climate: {
    circularOfferings: typeof CIRCULAR_OFFERINGS;
    magazineArticles: typeof MAGAZINE_ARTICLES;
    policyFocus: typeof POLICY_FOCUS_ITEMS;
    expertise: typeof EXPERTISE_ITEMS;
    industrySolutions: typeof INDUSTRY_SOLUTIONS;
    esgFocus: typeof ESG_FOCUS_AREAS;
    sixPillars: typeof SIX_PILLARS;
    fourValues: typeof FOUR_VALUES;
  };
  defaultContent: WebsiteData;
}

export const SITE_DATA: SiteDataExport = {
  navigation: {
    menuItems: NAV_MENU_ITEMS,
    primaryNav,
    defaultConfig: defaultNavbarConfig,
  },
  about: {
    newsPosts: NEWS_POSTS,
    values: VALUES_ACCORDION_ITEMS,
    gallery: GALLERY_PHOTOS,
    teamMembers: TEAM_MEMBERS,
  },
  climate: {
    circularOfferings: CIRCULAR_OFFERINGS,
    magazineArticles: MAGAZINE_ARTICLES,
    policyFocus: POLICY_FOCUS_ITEMS,
    expertise: EXPERTISE_ITEMS,
    industrySolutions: INDUSTRY_SOLUTIONS,
    esgFocus: ESG_FOCUS_AREAS,
    sixPillars: SIX_PILLARS,
    fourValues: FOUR_VALUES,
  },
  defaultContent: DEFAULT_WEBSITE_DATA,
};

export default SITE_DATA;

