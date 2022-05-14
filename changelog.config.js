module.exports = {
  disableEmoji: false,
  format: "{emoji}{type}: {subject}",
  list: [
    "feat",
    "fix",
    "test",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
    "delete",
    "init",
    "merge",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject", "body"],
  types: {
    feat: {
      description: "Introduce new features.",
      emoji: "✨",
      value: "feat",
    },
    fix: {
      description: "Fix a bug.",
      emoji: "🐛",
      value: "fix",
    },
    style: {
      description: "Add or update the UI and style files.",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "Add, update, or pass tests.",
      emoji: "✅",
      value: "test",
    },
    refactor: {
      description: "Refactor code.",
      emoji: "♻️",
      value: "refactor",
    },
    ci: {
      description: "Add or update CI build system.",
      emoji: "👷",
      value: "ci",
    },
    perf: {
      description: "Improve performance.",
      emoji: "⚡️",
      value: "perf",
    },
    seo: {
      description: "Add or update SEO",
      emoji: "🔍️",
      value: "seo",
    },
    docs: {
      description: "Documentation only changes.",
      emoji: "📝",
      value: "docs",
    },
    delete: {
      description: "Remove code or files.",
      emoji: "🔥",
      value: "delete",
    },
    init: {
      description: "Begin a project.",
      emoji: "🎉",
      value: "init",
    },
    merge: {
      description: "Merge code or branche.",
      emoji: "🔀",
      value: "merge",
    },
  },
};
