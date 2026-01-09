# Copilot Workflow for LeetCode Solutions

## Solution Structure

Each solution follows this structure:
```
solutions/[#]. [Problem Name]/
├── README.md
├── script.ts
└── __tests__/
    └── script.test.ts
```

### README.md
- Problem title with difficulty level (# [Name]\n\n## [Easy|Medium|Hard])
- Problem description
- Constraints section

### script.ts
- Export the solution function: `export {functionName}`
- Use explicit types everywhere
- Keep cognitive complexity low by extracting helper functions
- Define custom types at the top when needed

### __tests__/script.test.ts
- Tests in `__tests__/` subfolder
- Only include test cases from the problem statement
- Use descriptive test names (not "One", "Two")
- Format: `it('Description of what it does', (): void => { ... })`

## Code Quality

- **Explicit types**: All function parameters, return types, and variables must have types
- **Low complexity**: Extract functions to reduce cognitive complexity
- **Naming**: Clear, descriptive names for functions and variables
- **Type aliases**: Define at top for complex types (e.g., `type ParentMap = Map<string, Set<string>>`)

## Workflow

1. **Create solution files**
   - Create folder: `solutions/[#]. [Problem Name]/`
   - Create README.md with problem description
   - Create script.ts with solution
   - Create __tests__/script.test.ts with test cases

2. **Update global README.md**
   - Add entry in the correct numerical position
   - Format: `1. № [[#]. [Problem Name]](solutions/[#].%20[Problem%20Name]/script.ts)`

3. **Run tests**
   - Use Jest Runner extension: `Ctrl+Cmd+T` (Mac)
   - Or: `npm test -- "[#]. [Problem Name]"`

4. **Commit**
   - Initial commit: `#[number] [Problem Name]`
   - Refactoring: `#[number] Refactor: [description]`
   - Examples:
     - `#126 Word Ladder II`
     - `#126 Refactor: reduce complexity, add explicit types`

5. **Push**
   - `git push` or use VS Code sync

## Example Session

```
User: https://leetcode.com/problems/word-ladder-ii/
Copilot: [creates all files, runs tests, commits]
User: refactor
Copilot: [refactors for lower complexity, commits]
User: push
Copilot: [pushes to remote]
```
