import { Sparkles, Plus, SlidersHorizontal, ArrowUp } from 'lucide-react';
import { AI_MODELS } from '../../data/mockData';
import styles from './PromptBox.module.css';
import type { PromptMode } from '../../types';

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
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>What will you create next?</h1>

      <div className={styles.modeSwitcher}>
        <button
          className={`${styles.modeBtn} ${mode === 'chat' ? styles.modeBtnActive : ''}`}
          onClick={() => onModeChange('chat')}
        >
          Chat
        </button>
        <button
          className={`${styles.modeBtn} ${mode === 'tools' ? styles.modeBtnActive : ''}`}
          onClick={() => onModeChange('tools')}
        >
          Tools
        </button>
      </div>

      <div className={styles.promptCard}>
        <div className={styles.proBanner}>
          <Sparkles size={14} />
          <span>Unlock more features with Pro</span>
        </div>

        <div className={styles.promptInputWrapper}>
          <textarea
            className={styles.textarea}
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Create a video ad for a skincare client."
            rows={3}
          />

          <div className={styles.promptToolbar}>
            <div className={styles.toolbarLeft}>
              <button type="button" className="circle-btn" title="Attach file">
                <Plus size={16} />
              </button>

              <div className={styles.modelSelect}>
                <SlidersHorizontal size={14} />
                <select
                  className={styles.select}
                  value={selectedModel}
                  onChange={(e) => onModelChange(e.target.value)}
                >
                  {AI_MODELS.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="button"
              className={styles.submitBtn}
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
