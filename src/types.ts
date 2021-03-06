export const CommitProfile = {
  bodyLineLength: 100,
  maxSubjectLength: 72,
  types: {
    build: {
      changelog: false,
      description: 'Changes that affect the build system or external dependencies (example scopes: gulp, npm, etc.)',
      emoji: '🔨',
      release: false,
      title: 'Builds'
    },
    chore: {
      aliases: {
        devDependencies: {
          description: 'Update dev dependencies',
          emoji: '⬆️',
          scope: 'package',
          title: 'Dev dependencies'
        }
      },
      changelog: false,
      description: "Other changes that don't modify src or test files",
      emoji: '🔧',
      release: false,
      title: 'Chores'
    },
    ci: {
      changelog: false,
      description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, GitLab, GitHub, BrowserStack, etc.)',
      emoji: '📦',
      release: false,
      title: 'Continuous Integrations'
    },
    docs: {
      changelog: false,
      description: 'Changes that only impact documentation',
      emoji: '📝',
      release: false,
      title: 'Documentation'
    },
    feat: {
      aliases: { initial: { description: 'Initial commit', emoji: '🎉', title: 'Initial' } },
      changelog: true,
      description: 'A new feature',
      emoji: '✨',
      release: 'minor',
      title: 'Features'
    },
    fix: {
      aliases: {
        dependencies: { description: 'Update dependency', emoji: '⬆️', scope: 'package', title: 'Dependencies' },
        metadata: { description: 'Update metadata (package.json)', emoji: '📦', scope: 'package', title: 'Metadata' },
        peerDependencies: {
          description: 'Update peer dependency',
          emoji: '⬆️',
          scope: 'package',
          title: 'Peer dependencies'
        }
      },
      changelog: true,
      description: 'A bug fix',
      emoji: '🐛',
      release: 'patch',
      title: 'Bug Fixes'
    },
    perf: {
      changelog: true,
      description: 'A code change that improves performance',
      emoji: '🚀',
      release: 'patch',
      title: 'Performance Improvements'
    },
    refactor: {
      changelog: true,
      description: 'A code change that neither fixes a bug nor adds a feature',
      emoji: '🧐',
      release: 'patch',
      title: 'Code Refactoring'
    },
    revert: {
      changelog: true,
      description: 'Reverts a previous commit',
      emoji: '⏪',
      release: 'patch',
      title: 'Reverts'
    },
    style: {
      changelog: false,
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      emoji: '🎨',
      release: false,
      title: 'Styles'
    },
    test: {
      changelog: false,
      description: 'Adding missing tests or correcting existing tests',
      emoji: '🧪',
      release: false,
      title: 'Tests'
    }
  },
  typesOrder: [
    'feat',
    'fix',
    'perf',
    'build',
    'refactor',
    'docs',
    'test',
    'ci',
    'chore',
    'style',
    'revert',
    'initial',
    'dependencies',
    'peerDependencies',
    'devDependencies',
    'metadata'
  ]
}

export type CommitTypes =
  | 'build'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip'
  | 'chore'

export const { types } = CommitProfile
