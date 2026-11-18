import { Plus, RotateCw } from 'lucide-react';
import styles from './IdeasSection.module.css';
import type { IdeaCard } from '../../types';

interface IdeasSectionProps {
  ideas: IdeaCard[];
  onSelectIdea: (template: string) => void;
  onRefresh: () => void;
}

export function IdeasSection({ ideas, onSelectIdea, onRefresh }: IdeasSectionProps) {
  return (
    <section className={styles.ideasSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Ideas for You</h2>
        <button className="circle-btn" onClick={onRefresh} title="Refresh ideas">
          <RotateCw size={15} />
        </button>
      </div>

      <div className={styles.ideasList}>
        {ideas.map((idea) => (
          <article
            key={idea.id}
            className={styles.ideaCard}
            onClick={() => onSelectIdea(idea.promptTemplate)}
          >
            <div className={styles.ideaThumb} style={{ background: idea.gradient }} />

            <div className={styles.ideaInfo}>
              <h3>{idea.title}</h3>
              <p>{idea.subtitle}</p>
            </div>

            <button
              type="button"
              className={styles.ideaAddBtn}
              onClick={(e) => {
                e.stopPropagation();
                onSelectIdea(idea.promptTemplate);
              }}
              title="Use template"
            >
              <Plus size={14} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
