# Project Rules

## Core Guidelines
1. **Strict Design Adherence**: Remain entirely within the boundaries of the design inspiration. If a design constraint or inspiration link is provided, it must be the primary source of truth for UI/UX decisions.
2. **No Heavy Plugins/Dependencies**: Do not use or download heavy plugins or bloated dependencies for tasks that can be achieved natively or using much simpler tools (e.g., standard CSS/HTML, small utility libraries).
3. **Time-Taking Tasks Highlighted**: Any process or script that takes a significant amount of time (e.g., AI model downloads, heavy compilation) MUST be highlighted and questioned before execution. If a manual alternative (like using Adobe/Figma for background removal) takes seconds, prefer the manual route or ask the user for assistance rather than wasting time on a brittle script.
4. **Ponytail Protocol (Full)**:
   - Does this need to exist at all? (YAGNI)
   - Already in the codebase? Reuse it.
   - Stdlib/Native Platform feature covers it? Use it (e.g., CSS scroll snapping over JS carousels).
   - Can it be one line? One line.
   - Fewest files possible. Deletion over addition. Boring over clever.
5. **Always Keep Context Alive**: Update `context.md`, `design.md`, and `rules.md` whenever core requirements shift.
