# Changelog

## [Unreleased]

## [0.9.0] - 2026-01-25

### Added
- Footer component with version link and attribution
- Install count display for skills with Activity icon
- Install count fetching from skills.sh API

### Changed
- Extracted footer from layout into separate component
- Improved changelog page with sticky header and backdrop blur
- Enhanced layout structure with flexbox for footer positioning
- Updated homepage styling to remove background color

## [0.8.1] - 2026-01-25

### Added
- GitHub repository link button to homepage header

## [0.8.0] - 2026-01-25

### Added
- PackageManagerCode component with package manager selection tabs
- Tabs UI component from shadcn/ui for tabbed interfaces

### Changed
- Enhanced homepage with package manager selection (Bun, NPM, PNPM, Yarn)
- Added @radix-ui/react-tabs dependency for tab functionality
- Removed react-syntax-highlighter dependency

## [0.7.0] - 2026-01-25

### Added
- Command discovery and display functionality for skills
- Automatic detection of command files in skill directories
- Command display in skills UI with copyable command snippets

### Changed
- Enhanced skills UI to show available commands for each skill
- Updated skills data structure to include command information

## [0.6.0] - 2026-01-25

### Added
- `create-test-plan` command for ISTQB Foundation skill to create comprehensive test plans following ISTQB standards

### Changed
- Updated README with installation instructions and skills overview
- Enhanced ISTQB Foundation skill documentation to include command workflows
- Improved homepage UI with installation code snippet and skills.sh link
- Improved layout footer styling with button component
- Cleaned up .gitignore comments and organization

## [0.5.1] - 2026-01-25

### Changed
- Updated skills root path configuration to use `skills/` directory instead of `.agents/skills/`
- Removed redundant "Active Skills" heading from homepage

## [0.5.0] - 2026-01-25

### Added
- ISTQB Foundation skill with comprehensive testing principles, techniques, and best practices
- Skills browsing interface now displays all available skills instead of a single skill

### Changed
- Reorganized skills directory structure: moved changelog-generator from `.agents/skills/` to `skills/`
- Updated skills path configuration to use `.agents/skills/` directory
- Enhanced web application to show all skills in a grid layout with version badges

### Removed
- Turborepo agent skill and all associated documentation
- Vercel React best practices skill and all associated rules

## [0.4.0] - 2026-01-25

### Added
- Changelog generator skill for automated changelog generation with semantic versioning
- Turborepo agent skill with comprehensive documentation and best practices
- Vercel React best practices skill with performance and optimization rules

### Changed
- Reformatted CHANGELOG.md to follow Keep a Changelog format standards
- Added version field to package.json

## [0.3.0] - 2026-01-25

### Added
- Turborepo monorepo structure and configuration

### Changed
- Migrated project to Turborepo monorepo structure
- Moved Next.js web application and all web app files to `apps/web/` directory
- Reorganized skills directory structure to flat hierarchy
- Updated root package.json, TypeScript configuration, `.cursorrules`, and `.gitignore` for monorepo setup

## [0.2.0] - 2026-01-24

### Added
- Next.js web application with skills browsing interface, changelog viewer, and theme toggle
- Skills: `istqb-foundation`, `metrics-quality-reporting`, `test-strategy`
- Executable skill template and project configuration files

### Changed
- Updated `test-planning` and `skill-template` skills

## [0.1.0] - 2026-01-24

### Added
- Initial project setup with MIT license, release workflow, and changelog
- Skills catalog overview and `test-planning` process skill
- Reusable skill template

### Changed
- Updated top-level README with usage and catalog guidance
