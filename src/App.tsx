import { useMemo, useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { PromptBox } from './components/PromptBox/PromptBox';
import { IdeasSection } from './components/IdeasSection/IdeasSection';
import { WishesSection } from './components/WishesSection/WishesSection';
import { AI_MODELS, IDEAS_DATA, WISH_CATEGORIES, WISHES_DATA } from './data/mockData';
import styles from './App.module.css';
import type { NavTab, PromptMode, WishItem } from './types';

const INITIAL_CREDITS = 15;
const DEFAULT_CATEGORY = 'For you';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [promptMode, setPromptMode] = useState<PromptMode>('chat');
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState<string>(AI_MODELS[0]);
  const [credits, setCredits] = useState(INITIAL_CREDITS);

  const [ideas, setIdeas] = useState(IDEAS_DATA);
  const [wishes, setWishes] = useState<WishItem[]>(WISHES_DATA);
  const [activeCategory, setActiveCategory] = useState(DEFAULT_CATEGORY);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePromptSubmit = () => {
    if (!prompt.trim() || credits <= 0) return;

    setCredits((prev) => prev - 1);
    showToast(`Started generation (${promptMode} • ${selectedModel})`);
    setPrompt('');
  };

  const handleRefreshIdeas = () => {
    setIdeas((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleToggleSaveWish = (id: string) => {
    setWishes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, saved: !item.saved } : item))
    );
  };

  const displayedWishes = useMemo(
    () => (activeTab === 'saved' ? wishes.filter((item) => item.saved) : wishes),
    [activeTab, wishes]
  );

  return (
    <div className={styles.appLayout}>
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onSearchClick={() => setActiveTab('home')}
      />

      <div className={styles.mainWrapper}>
        <Header
          credits={credits}
          onUpgrade={() => showToast('Pro plan upgrade is available in full version')}
        />

                <main className={styles.mainContent}>
          {activeTab === 'home' && (
            <>
              <PromptBox
                mode={promptMode}
                onModeChange={setPromptMode}
                prompt={prompt}
                onPromptChange={setPrompt}
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
                onSubmit={handlePromptSubmit}
              />

              <IdeasSection
                ideas={ideas}
                onSelectIdea={setPrompt}
                onRefresh={handleRefreshIdeas}
              />

              <WishesSection
                categories={WISH_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                items={displayedWishes}
                onToggleSave={handleToggleSaveWish}
                onSelectWish={setPrompt}
              />
            </>
          )}

          {activeTab === 'saved' && (
            <WishesSection
              categories={[DEFAULT_CATEGORY]}
              activeCategory={DEFAULT_CATEGORY}
              onSelectCategory={() => {}}
              items={displayedWishes}
              onToggleSave={handleToggleSaveWish}
              onSelectWish={(text) => {
                setPrompt(text);
                setActiveTab('home');
              }}
            />
          )}

          {(activeTab === 'chat' || activeTab === 'results' || activeTab === 'settings') && (
            <div className={styles.placeholderView}>
              <span className={styles.placeholderBadge}>Coming soon</span>
              <h2 className={styles.placeholderTitle}>{activeTab}</h2>
              <p className={styles.placeholderText}>
                This section is currently in development. Return to the home workspace to start creating.
              </p>
              <button
                type="button"
                className={styles.backHomeBtn}
                onClick={() => setActiveTab('home')}
              >
                Back to Home
              </button>
            </div>
          )}
        </main>

      </div>

      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
    </div>
  );
}

export default App;
