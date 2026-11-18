import { HelpCircle, Sparkles, User } from 'lucide-react';

interface HeaderProps {
  credits: number;
  onUpgrade: () => void;
}

export function Header({ credits, onUpgrade }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-mark" />
        <span className="logo-text">artven</span>
      </div>

      <div className="header-actions">
        <button className="circle-btn" title="Help">
          <HelpCircle size={16} />
        </button>

        <div className="credits-pill">
          <span className="credits-count">
            <Sparkles size={14} />
            {credits}
          </span>
          <button className="upgrade-btn" onClick={onUpgrade}>
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
