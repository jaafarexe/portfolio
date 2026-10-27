export interface Project {
  id: number;
  name: string;
  description: string;
  category: 'Games' | 'Productivity' | 'Utilities' | 'Business & SaaS' | 'Lifestyle';
  githubUrl?: string;
  isOnGithub: boolean;
  highlights?: string[];
  techStack?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Neon Snake Arena',
    description: 'Snake arcade game.',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Classic arcade mechanics with responsive controls', 'Dynamic speed scaling and high-score persistence', 'Smooth 60fps canvas rendering'],
    techStack: ['HTML5 Canvas', 'TypeScript', 'Web Audio API']
  },
  {
    id: 2,
    name: 'Focus Flow',
    description: 'Productivity app with Pomodoro timer, session stats and tasks.',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Customizable Pomodoro intervals (work, short break, long break)', 'Task queue integration with completion tracking', 'Daily & weekly productivity analytics with streak tracking'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Local Storage']
  },
  {
    id: 3,
    name: 'SwiftConvert',
    description: 'Unit and currency converter.',
    category: 'Utilities',
    isOnGithub: false,
    highlights: ['Multi-category unit conversion (length, mass, temperature, speed, data)', 'Real-time live exchange rate calculation', 'Offline formula lookup and instant reciprocal swapping'],
    techStack: ['TypeScript', 'Exchange Rate API', 'Tailwind CSS']
  },
  {
    id: 4,
    name: 'Memory Match Master',
    description: 'Card matching memory game.',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Multiple grid difficulties (4x4, 6x6)', 'Timer, flip counter, and accuracy ratings', 'Smooth 3D flip card animations'],
    techStack: ['React', 'CSS 3D Transforms', 'TypeScript']
  },
  {
    id: 5,
    name: 'Lumen — Smart Focus Lamp',
    description: 'marketing landing page (hero, features, pricing plans, testimonials, FAQ).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['High-conversion hero with interactive product lighting demo', 'Tiered pricing calculator with annual discount switch', 'Customer reviews with social proof and collapsible FAQ'],
    techStack: ['React', 'Tailwind CSS', 'Motion']
  },
  {
    id: 6,
    name: 'Neon Breakout',
    description: 'Brick-breaker arcade game with paddle, levels, pause and restart.',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Multi-level brick layouts with variable durability', 'Paddle angle deflection physics and ball speed curves', 'Pause menu, lives management, and high scores'],
    techStack: ['HTML5 Canvas', 'TypeScript', 'RequestAnimationFrame']
  },
  {
    id: 7,
    name: 'SpendWise Expense Tracker',
    description: 'Finance tracker with totals by category, donut/bar breakdown, add/edit/delete.',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Interactive expense category breakdowns (donut & monthly bars)', 'Quick modal transaction entry with instant balance updates', 'Export summary to CSV and filtered timeline view'],
    techStack: ['React', 'TypeScript', 'SVG Charts', 'Tailwind CSS']
  },
  {
    id: 8,
    name: 'StudyDeck Flashcards',
    description: 'Study app with decks, dashboard, mastery and study modes.',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Spaced repetition study mode with confidence scoring', 'Deck creator with import/export capabilities', 'Visual mastery progress dashboard across topics'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 9,
    name: '2048 Puzzle Arena',
    description: '2048 puzzle game (4x4 grid, score/best, undo, stats).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Smooth sliding tile animations and swipe gestures on mobile', 'Step-by-step undo history and current game state recovery', 'Detailed gameplay statistics (highest tile, win rate)'],
    techStack: ['React', 'TypeScript', 'Touch Gestures API']
  },
  {
    id: 10,
    name: 'CampaignPulse Analytics',
    description: 'Marketing analytics dashboard (KPI cards, chart, channel breakdown, campaign table).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Real-time KPI metric overview (CTR, CAC, ROAS, conversions)', 'Multi-channel acquisition distribution and interactive chart', 'Sortable, filterable campaign performance table'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 11,
    name: 'WeatherNow',
    description: 'Weather app (city search, current weather, hourly, 7-day forecast).',
    category: 'Utilities',
    isOnGithub: false,
    highlights: ['Global city search with auto-complete and geolocation', 'Hourly temperature breakdown and 7-day weather outlook', 'UV index, humidity, wind velocity, and air quality metrics'],
    techStack: ['Open-Meteo API', 'React', 'TypeScript']
  },
  {
    id: 12,
    name: 'MineSweeper Pro',
    description: 'Minesweeper game (Beginner/Intermediate/Expert, mine counter, timer, Dig/Flag).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Standard rule-set with 3 difficulty presets and custom boards', 'Dual-mode input (Dig / Flag) with mobile touch hold support', 'First-click safe guarantee and recursive zero-reveal algorithm'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 13,
    name: 'InvoiceForge',
    description: 'Business invoice generator (editable items, totals, printable preview, PDF).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Real-time itemized line entries with tax and discount math', 'Print-optimized CSS preview template', 'PDF export and company branding customization'],
    techStack: ['React', 'TypeScript', 'Print Media CSS']
  },
  {
    id: 14,
    name: 'WaveTunes Music Player',
    description: 'Music player (playlists, track list, favorites, now-playing controls).',
    category: 'Lifestyle',
    isOnGithub: false,
    highlights: ['Audio playback engine with scrubber, volume, and repeat/shuffle', 'Custom playlist management and persistent favorites', 'Visual waveform audio preview and album art display'],
    techStack: ['Web Audio API', 'React', 'TypeScript']
  },
  {
    id: 15,
    name: 'BlockStack Tetris',
    description: 'Tetris game (score, high score, levels, lines, next/hold piece).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Standard 7-bag randomizer and SRS rotation physics', 'Next piece queue, hold buffer, and ghost piece landing aid', 'Level-up speed progression with line clear bonus scoring'],
    techStack: ['Canvas API', 'TypeScript', 'Keyboard & Mobile Controls']
  },
  {
    id: 16,
    name: 'PostPlanner Content Calendar',
    description: 'Marketing calendar (month view, platform/status filters, agenda, metrics).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Interactive monthly grid with drag-and-drop scheduling', 'Platform filtering (X, LinkedIn, Instagram, YouTube)', 'Draft vs. scheduled vs. published status pipeline'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 17,
    name: 'Tasty Recipes',
    description: 'Recipe app (16 recipes, search, meal filters, ingredients, steps, favorites, shopping list).',
    category: 'Lifestyle',
    isOnGithub: false,
    highlights: ['16 curated culinary recipes with prep times and nutrition', 'Interactive ingredient checklist and one-click shopping list', 'Meal type filters (breakfast, dinner, vegan, quick snacks)'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 18,
    name: 'Galaxy Defender',
    description: 'Space shooter game (score, lives, levels, power-ups, pause, game over).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Retro arcade space combat with bullet patterns', 'Enemy waves, boss encounters, and shield/laser power-ups', 'Particle explosion effects and retro synth sound effects'],
    techStack: ['HTML5 Canvas', 'Web Audio API', 'TypeScript']
  },
  {
    id: 19,
    name: 'LeadFlow CRM',
    description: 'CRM with Kanban pipeline, status filters, search and dashboard stats.',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Multi-stage Kanban deal pipeline (Lead, Contacted, Proposal, Won)', 'Instant lead search and stage conversion analytics', 'Activity logger with contact history and deal value aggregates'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 20,
    name: 'FitLog Workout Tracker',
    description: 'Workout tracker (dashboard, workouts/sets/volume, 7-day activity, recent sessions).',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Exercise logging for sets, reps, and total tonnage volume', '7-day workout activity heatmap and volume progression chart', 'Pre-configured workout routines and personal record tracking'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 21,
    name: 'Sudoku Master',
    description: 'Sudoku game (9x9 grid, difficulty, timer, mistakes, hints, notes mode).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Valid Sudoku puzzle generation across 3 difficulty tiers', 'Notes pencil mode for candidate number recording', 'Error counter, smart hint system, and timer tracking'],
    techStack: ['React', 'TypeScript', 'Backtracking Solver']
  },
  {
    id: 22,
    name: 'MailCraft Newsletter Builder',
    description: 'Newsletter builder (live preview, templates, subscriber stats).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Modular drag-style newsletter section editor (header, text, CTA, footer)', 'Mobile vs. desktop live responsive email previewer', 'Audience growth analytics and template preset library'],
    techStack: ['React', 'TypeScript', 'HTML Email Generator']
  },
  {
    id: 23,
    name: 'NoteNest - Smart Notes',
    description: 'Notes app (list, pinned notes, search, tags).',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Fast full-text notes search with tag grouping', 'Pin crucial notes to top and color-coded categorizations', 'Markdown rendering support and auto-saving drafts'],
    techStack: ['React', 'TypeScript', 'Local Storage']
  },
  {
    id: 24,
    name: 'Flappy Sky - Arcade',
    description: 'Flappy-style arcade game (start screen, best score, difficulty modes).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Responsive one-touch jump physics with gravity simulation', 'Dynamic obstacle pipe generation with score triggers', 'Difficulty presets (Easy, Normal, Hard) and local high score'],
    techStack: ['HTML5 Canvas', 'TypeScript']
  },
  {
    id: 25,
    name: 'RankCheck - SEO Audit',
    description: 'SEO audit tool (URL input, score, category scores, checklist).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['Actionable audit engine analyzing meta tags, headings, and speed', 'Granular category scoring: Performance, SEO, Accessibility, Social', 'Prioritized action checklist with impact ratings'],
    techStack: ['TypeScript', 'React', 'Tailwind CSS']
  },
  {
    id: 26,
    name: 'Grandmaster Chess Arena',
    description: 'Chess game (8x8 board, move notation, captured pieces, turn indicator).',
    category: 'Games',
    isOnGithub: false,
    highlights: ['Legal chess move validation including castling and en passant', 'Algebraic move notation feed and captured piece tray', 'Turn indicator with game state detection (check, checkmate, stalemate)'],
    techStack: ['React', 'TypeScript', 'Chess Engine Logic']
  },
  {
    id: 27,
    name: 'Daily Momentum Habit Tracker',
    description: 'Habit tracker (today check-offs, streaks, calendar, weekly stats).',
    category: 'Productivity',
    isOnGithub: false,
    highlights: ['Daily habit completion checklist with immediate visual feedback', 'Streak calculations to maintain positive behavioral momentum', 'Weekly compliance statistics and monthly history calendar view'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 28,
    name: 'Lumina Everyday Store',
    description: 'E-commerce storefront (15-product grid, search, filters, cart, checkout demo).',
    category: 'Business & SaaS',
    isOnGithub: false,
    highlights: ['15-item curated catalog with category filters and price range sorting', 'Interactive slide-over cart with quantity modification', 'Full mockup checkout flow with order summary confirmation'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 29,
    name: 'Maze Runner Arcade',
    description: 'Maze game (5 progressive levels, score/combo, 3 lives, collectibles, hazards/power-ups, timer, pause, endless mode).',
    category: 'Games',
    githubUrl: 'https://github.com/jaafarexe/maze-runner-arcade',
    isOnGithub: true,
    highlights: ['5 hand-designed progressive labyrinth levels plus procedurally generated endless mode', 'Dynamic score combo multiplier, speed power-ups, and hazard traps', 'Full keyboard navigation and mobile on-screen d-pad support', 'Open-source code available on GitHub with full documentation'],
    techStack: ['TypeScript', 'Canvas 2D', 'Arcade Game Engine']
  },
  {
    id: 30,
    name: 'LinguaQuiz - Language Vocabulary Mastery',
    description: 'Language quiz (vocabulary in 6 languages, 5 levels unlocked at 70%+, score/streaks, per-question timer, instant feedback, missed-word review).',
    category: 'Utilities',
    githubUrl: 'https://github.com/jaafarexe/linguaquiz',
    isOnGithub: true,
    highlights: ['Vocabulary mastery training in 6 major languages', '5 progressive tiers unlocked by achieving 70%+ proficiency scores', 'Timed question rounds with instant phonetic/definition feedback', 'Dedicated missed-words review deck to conquer retention gaps'],
    techStack: ['React', 'TypeScript', 'Web Audio API', 'Tailwind CSS']
  },
  {
    id: 31,
    name: 'Savory Table',
    description: 'Restaurant ordering app (menu categories, search/filter, cart with quantities, checkout/order summary, live order-status demo).',
    category: 'Business & SaaS',
    githubUrl: 'https://github.com/jaafarexe/savory-table',
    isOnGithub: true,
    highlights: ['Interactive culinary menu with dietary tags and instant filtering', 'Real-time cart with quantity adjustment, special requests, and tax calculation', 'Mock checkout with live simulated order preparation status tracker', 'Production-ready code architecture on GitHub'],
    techStack: ['React', 'TypeScript', 'State Management', 'Tailwind CSS']
  }
];
