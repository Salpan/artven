import { useMemo, useState } from 'react';
import { Bookmark, Search, X } from 'lucide-react';
import styles from './WishesSection.module.css';
import type { WishItem } from '../../types';

interface WishesSectionProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  items: WishItem[];
  onToggleSave: (id: string) => void;
  onSelectWish: (title: string) => void;
}

export function WishesSection({
  categories,
  activeCategory,
  onSelectCategory,
  items,
  onToggleSave,
  onSelectWish,
}: WishesSectionProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const matchesCategory = activeCategory === 'For you' || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [items, activeCategory, searchQuery]
  );

  const handleCloseSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
  };

  return (
    <section>
      <h2 className={styles.title}>Wishes</h2>

      <div className={styles.categoriesBar}>
        <div className={styles.categoriesList}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`${styles.categoryPill} ${
                activeCategory === category ? styles.categoryPillActive : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div>
          {isSearching ? (
            <div className={styles.searchInputBox}>
              <Search size={14} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter styles..."
                autoFocus
              />
              <button onClick={handleCloseSearch} title="Close search">
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              className="circle-btn"
              onClick={() => setIsSearching(true)}
              title="Search wishes"
            >
              <Search size={15} />
            </button>
          )}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className={styles.emptyState}>No items found for this filter.</div>
      ) : (
        <div className={styles.wishesGrid}>
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={styles.wishCard}
              onClick={() => onSelectWish(`Create a concept inspired by "${item.title}"`)}
            >
              <div
                className={styles.wishImage}
                style={{ background: item.gradient, height: `${item.height}px` }}
              />

              <button
                type="button"
                className={`${styles.bookmarkBtn} ${item.saved ? styles.bookmarkBtnSaved : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(item.id);
                }}
                title={item.saved ? 'Remove from Saved' : 'Save'}
              >
                <Bookmark size={15} fill={item.saved ? 'currentColor' : 'none'} />
              </button>

              <div className={styles.wishOverlay}>
                <span className={styles.wishTitle}>{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
