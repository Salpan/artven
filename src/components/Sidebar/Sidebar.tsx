import { Search, LayoutGrid, MessageSquare, Bookmark, Layers, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';
import type { NavTab } from '../../types';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onSearchClick: () => void;
}

const NAV_ITEMS: { id: NavTab; label: string; icon: typeof LayoutGrid; hasDot?: boolean }[] = [
  { id: 'home', label: 'Home', icon: LayoutGrid },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'saved', label: 'Saved', icon: Bookmark },
  { id: 'results', label: 'Results', icon: Layers, hasDot: true },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function Sidebar({ activeTab, onSelectTab, onSearchClick }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <button className={styles.iconBtn} onClick={onSearchClick} title="Search">
          <Search size={18} />
        </button>

        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              >
                <div className={styles.navIconBox}>
                  <Icon size={18} />
                </div>
                <span className={styles.navLabel}>
                  {item.label}
                  {item.hasDot && <span className={styles.statusDot} />}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
