import { HelpCircle, Sparkles, User } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  credits: number;
  onUpgrade: () => void;
}

export function Header({ credits, onUpgrade }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMark} />
        <span className={styles.logoText}>artven</span>
      </div>

      <div className={styles.headerActions}>
        <button className="circle-btn" title="Help">
          <HelpCircle size={16} />
        </button>

        <div className={styles.creditsPill}>
          <span className={styles.creditsCount}>
            <Sparkles size={14} />
            {credits}
          </span>
          <button className={styles.upgradeBtn} onClick={onUpgrade}>
            Upgrade
          </button>
        </div>

        <button className="circle-btn" title="Profile">
          <User size={16} />
        </button>
      </div>
    </header>
  );
}
