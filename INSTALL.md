# Install the Atlas Design System

How to wire this repo in as a Claude Code skill so Claude produces on-brand Atlas UI without further explanation.

## One-time team setup

Each teammate runs this once on their machine.

### 1. Clone the repo

```bash
mkdir -p ~/projects
git clone https://github.com/atlasassistants/atlas-design-system.git ~/projects/atlas-design-system
```

You can clone anywhere — `~/projects/` is just a convention. The Claude Code skill works from a symlink, so the canonical location is up to you.

### 2. Symlink into Claude Code's skill directory

**For all projects (recommended):**

```bash
mkdir -p ~/.claude/skills
ln -s ~/projects/atlas-design-system ~/.claude/skills/atlas-design
```

**For a specific project only** (e.g. wiring it into a vault or work tree):

```bash
mkdir -p /path/to/project/.claude/skills
ln -s ~/projects/atlas-design-system /path/to/project/.claude/skills/atlas-design
```

### 3. Verify

In Claude Code, run:

```
/atlas-design
```

The skill should load and Claude should act as the Atlas design expert. If nothing happens, check that the symlink is valid:

```bash
ls -la ~/.claude/skills/atlas-design
# Should show: atlas-design -> /Users/<you>/projects/atlas-design-system
```

## How updates flow to the team

This is a normal git repo — pulling the latest is the same as any other.

```bash
cd ~/projects/atlas-design-system
git pull
```

Because the skill is a symlink, your Claude Code session picks up the new content immediately on next invocation.

## Editing the design system

Branch + PR like any other repo:

```bash
cd ~/projects/atlas-design-system
git checkout -b feat/new-card-pattern
# edit design.md, colors_and_type.css, ui_kits/marketing/, etc.
git add . && git commit -m "Add featured card hover lift pattern"
git push -u origin feat/new-card-pattern
gh pr create
```

The team reviews; merging to `main` is what gets propagated.

## Troubleshooting

**"Claude doesn't see the skill."**
- Make sure `~/.claude/skills/atlas-design/SKILL.md` exists when you `ls` it through the symlink.
- Restart Claude Code after first install — it discovers skills at startup.

**"I want to edit locally but not check changes in yet."**
- Edit through the symlinked path (or directly in `~/projects/atlas-design-system/`). Edits are immediately live for Claude — you commit them when ready.

**"I don't want to use a symlink."**
- You can clone directly into `~/.claude/skills/atlas-design/` — `git pull` from there. The symlink approach is cleaner because the canonical clone is separable from Claude config.

## What this skill does

When invoked, Claude reads [`design.md`](design.md) and treats itself as an Atlas design expert. It will:

- Output on-brand HTML/CSS/React components matching Atlas's visual language
- Reach for tokens from [`colors_and_type.css`](colors_and_type.css) instead of inventing values
- Use the brand voice rules (sentence case, no hype words, em-dash cadence) when writing copy
- Reference the marketing kit ([`ui_kits/marketing/`](ui_kits/marketing/)) as the canonical pattern library
- Copy logos and fonts out of [`assets/`](assets/) and [`fonts/`](fonts/) for static artifacts

For production code, Claude will read the rules and write production-quality CSS / React / Tailwind that uses the design tokens. For throwaway prototypes and slides, Claude will produce static HTML files you can open and view.
