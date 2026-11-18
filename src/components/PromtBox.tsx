import { Sparkles, Plus, SlidersHorizontal, ArrowUp } from 'lucide-react';
import type { PromptMode } from '../types';


interface PromptBoxProps {
  mode: PromptMode;
  onModeChange: (mode: PromptMode) => void;
  prompt: string;
  onPromptChange: (value: string) => void;
  selectedModel: string;
  onModelChange: (model: string) => void;
  onSubmit: () => void;
}

export function PromptBox({
  mode,
  onModeChange,
  prompt,
  onPromptChange,
  selectedModel,
  onModelChange,
  onSubmit,
}: PromptBoxProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <section className="hero-section">
      <h1 className="hero-title">What will you create next?</h1>

      {/* Переключатель Chat / Tools */}
      <div className="mode-switcher">
        <button
          className={`mode-btn ${mode === 'chat' ? 'active' : ''}`}
          onClick={() => onModeChange('chat')}
        >
          Chat
        </button>
        <button
          className={`mode-btn ${mode === 'tools' ? 'active' : ''}`}
          onClick={() => onModeChange('tools')}
        >
          Tools
        </button>
      </div>

      {/* Карточка ввода */}
      <div className="prompt-card">
        <div className="pro-banner">
          <Sparkles size={14} />
          <span>Unlock more features with Pro</span>
        </div>

        <div className="prompt-input-wrapper">
          <textarea
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Create a video ad for a skincare client."
            rows={3}
          />

          <div className="prompt-toolbar">
            <div className="toolbar-left">
              <button type="button" className="circle-btn" title="Attach file">
                <Plus size={16} />
              </button>

              <div className="model-select">
                <SlidersHorizontal size={14} />
                <select
                  value={selectedModel}
                  onChange={(e) => onModelChange(e.target.value)}
                >
                  <option value="Auto">Auto</option>
                  <option value="Studio Pro">Studio Pro</option>
                  <option value="Fast Draft">Fast Draft</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="submit-btn"
              onClick={onSubmit}
              disabled={!prompt.trim()}
              title="Generate"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
