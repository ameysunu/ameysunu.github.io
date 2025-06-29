import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import './GitHubProjects.css';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  homepage: string | null;
}

const colorPalette = [
  '#254d4c',
  '#5b4135',
  '#3b4375',
  '#743136',
  '#5c518a' 
];

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace 'ameysunu' with your actual GitHub username
  const username = 'ameysunu';

  // Function to get random color from palette
  const getRandomColor = () => {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="github-projects-container">
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {repos.map((repo) => (
          <div 
            key={repo.id} 
            className="project-card"
            style={{ 
              background: `linear-gradient(135deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)` 
            }}
          >
            <div className="project-header">
              <h3 className="project-title">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
              {repo.homepage && (
                <a 
                  href={repo.homepage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-homepage"
                >
                  🌐
                </a>
              )}
            </div>
            
            {repo.description && (
              <p className="project-description">{repo.description}</p>
            )}
            
            <div className="project-meta">
              {repo.language && (
                <span className="project-language">{repo.language}</span>
              )}
              <div className="project-stats">
                <span className="project-stat">⭐ {repo.stargazers_count}</span>
                <span className="project-stat">🍴 {repo.forks_count}</span>
              </div>
            </div>
            
            {repo.topics && repo.topics.length > 0 && (
              <div className="project-topics">
                {repo.topics.slice(0, 5).map((topic) => (
                  <span key={topic} className="project-topic">
                    {topic}
                  </span>
                ))}
              </div>
            )}
            
            <div className="project-footer">
              <span className="project-updated">
                Updated {formatDate(repo.updated_at)}
              </span>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
} 