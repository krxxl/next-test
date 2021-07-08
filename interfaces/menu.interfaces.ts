export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  id: {
    secondaryCategory: string;
  };
  pages: PageItem[];
}
