import { NavMenuItem, NewsPost, ValueAccordionItem, GalleryPhoto, TeamMember } from '../types/aboutOverviewTypes';
export {
  NAV_MENU_ITEMS,
  NEWS_POSTS,
  VALUES_ACCORDION_ITEMS,
  GALLERY_PHOTOS,
  TEAM_MEMBERS,
} from './aboutOverviewData';
export * from './climateData';


export interface SiteDataExport {
  NAV_MENU_ITEMS: NavMenuItem[];
  NEWS_POSTS: NewsPost[];
  VALUES_ACCORDION_ITEMS: ValueAccordionItem[];
  GALLERY_PHOTOS: GalleryPhoto[];
  TEAM_MEMBERS: TeamMember[];
}
