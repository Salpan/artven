export type NavTab = 'home' | 'chat' | 'saved' | 'results' | 'settings';
export type PromptMode = 'chat' | 'tools';

export interface IdeaCard {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  promptTemplate: string;
}

export interface WishItem {
  id: string;
  title: string;
  category: string;
  gradient: string;
  height: number;
  saved: boolean;
}
