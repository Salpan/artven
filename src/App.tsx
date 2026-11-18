import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

import { IdeasSection } from './components/IdeasSection';
import { WishesSection } from './components/WishesSection';
import { IDEAS_DATA, WISH_CATEGORIES, WISHES_DATA } from './data/mockData';
import type { NavTab, PromptMode, WishItem } from './types';
import { PromptBox } from './components/PromtBox';


export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [promptMode, setPromptMode] = useState<PromptMode>('chat');
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('Auto');
  const [credits, setCredits] = useState(15);

  const [ideas, setIdeas] = useState(IDEAS_DATA);
  const [wishes, setWishes] = useState<WishItem[]>(WISHES_DATA);
  const [activeCategory, setActiveCategory] = useState('For you');

  // Отправка промпта (списание кредита + имитация генерации)
  const handlePromptSubmit = () => {
    if (!prompt.trim() || credits <= 0) return;

    setCredits((prev) => prev - 1);
    alert(`Generating (${promptMode} / ${selectedModel}):\n"${prompt}"`);
    setPrompt('');
  };

  // Перемешивание карточек идей
  const handleRefreshIdeas = () => {
    setIdeas((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  // Добавление/удаление из сохраненного
  const handleToggleSaveWish = (id: string) => {
    setWishes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, saved: !item.saved } : item))
    );
  };

  // Если выбрана вкладка Saved, показываем только сохраненные карточки
  const displayedWishes =
    activeTab === 'saved' ? wishes.filter((item) => item.saved) : wishes;

  return (
    <div className="app-layout">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onSearchClick={() => setActiveTab('home')}
      />

      <div className="main-wrapper">
        <Header
          credits={credits}
          onUpgrade={() => alert('Upgrade modal opened')}
        />

        <main className="main-content">
          {activeTab === 'saved' ? (
            <WishesSection
              categories={['For you']}
              activeCategory="For you"
              onSelectCategory={() => {}}
              items={displayedWishes}
              onToggleSave={handleToggleSaveWish}
              onSelectWish={(text) => {
                setPrompt(text);
                setActiveTab('home');
              }}
            />
          ) : (
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
                onSelectIdea={(template) => setPrompt(template)}
                onRefresh={handleRefreshIdeas}
              />

              <WishesSection
                categories={WISH_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                items={displayedWishes}
                onToggleSave={handleToggleSaveWish}
                onSelectWish={(text) => setPrompt(text)}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
