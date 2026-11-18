import { Plus, RotateCw } from 'lucide-react';
import type { IdeaCard } from '../types';

interface IdeasSectionProps {
  ideas: IdeaCard[];
  onSelectIdea: (template: string) => void;
  onRefresh: () => void;
}

export function IdeasSection({ ideas, onSelectIdea, onRefresh }: IdeasSectionProps) {
  return (
    <section className="ideas-section">
      <div className="section-header">
        <h2>Ideas for You</h2>
        <button className="circle-btn" onClick={onRefresh} title="Refresh ideas">
          <RotateCw size={15} />
        </button>
      </div>

      <div className="ideas-list">
        {ideas.map((idea) => (
          <article
            key={idea.id}
            className="idea-card"
            onClick={() => onSelectIdea(idea.promptTemplate)}
          >
            <img src={idea.image} alt={idea.title} className="idea-thumb" />

            <div className="idea-info">
              <h3>{idea.title}</h3>
              <p>{idea.subtitle}</p>
            </div>

            <button
              type="button"
              className="idea-add-btn"
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
