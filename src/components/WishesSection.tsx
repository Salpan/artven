import { useState } from 'react';
import { Bookmark, Search, X } from 'lucide-react';
import type { WishItem } from '../types';


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

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === 'For you' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCloseSearch = () => {
    setIsSearching(false);
    setSearchQuery('');
  };

  return (
    <section className="wishes-section">
      <h2>Wishes</h2>

      {/* Панель категорий и поиска */}
      <div className="categories-bar">
        <div className="categories-list">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`category-pill ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="category-search">
          {isSearching ? (
            <div className="search-input-box">
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

      {/* Сетка карточек */}
      {filteredItems.length === 0 ? (
        <div className="empty-state">No items found for this filter.</div>
      ) : (
        <div className="wishes-grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="wish-card"
              onClick={() => onSelectWish(`Create a concept inspired by "${item.title}"`)}
            >
              <div
  className="wish-image"
  style={{ background: item.gradient, height: `${item.height}px` }}
/>


              <button
                type="button"
                className={`bookmark-btn ${item.saved ? 'saved' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSave(item.id);
                }}
                title={item.saved ? 'Remove from Saved' : 'Save'}
              >
                <Bookmark size={15} fill={item.saved ? 'currentColor' : 'none'} />
              </button>

              <div className="wish-overlay">
                <span className="wish-title">{item.title}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
