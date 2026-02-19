# Agents Guidelines

## Code Style

- Always specify explicit data types for variables, parameters, and return values - never rely on type inference
- Do not use semicolons at the end of statements
- Always use curly braces for all control flow statements, including single-line `if`, `else`, `for`, `while`, and similar blocks
- Never use abbreviations in variable names, function names, class names, or comments - always use full, descriptive words (for example, `message` instead of `msg`, `request` instead of `req`, `response` instead of `res`, `error` instead of `err`, `configuration` instead of `config`, `parameter` instead of `param`, `document` instead of `doc`, `application` instead of `app`, `button` instead of `btn`, `temporary` instead of `tmp`, `index` instead of `idx`, `number` instead of `num`, `information` instead of `info`, `callback` instead of `cb`)

## TypeScript Conventions

- Use `interface` for object shapes and `type` for unions and intersections
- Prefer `const` over `let` - never use `var`
- Use `readonly` where mutation is not intended
- Use `enum` sparingly - prefer union types for string literals
- Always define return types on functions and methods explicitly
- Use `unknown` instead of `any` wherever possible, but prefer types

## Formatting

- Use 4-space indentation
- Use single quotes for strings
- Place opening curly braces on the same line as the statement

## Naming

- Use `camelCase` for variables and functions
- Use `PascalCase` for classes, interfaces, types, and enums
- Use `UPPER_SNAKE_CASE` for constants
- Prefix boolean variables with `is`, `has`, `should`, or `can`

## Project Structure

- Group files by solution id domain
- Always add readme file to solution. Register solution in root readme file too.
- Place utility functions in a dedicated `common` directory
- Keep each file and function focused on a single responsibility

## Error Handling

- Use typed custom error classes that extend `Error`
- Never silently swallow errors - log or rethrow with context

## Imports

- Use path aliases defined in `tsconfig.json` for internal imports

## Testing

- Name test files with the `.test.ts` suffix
- Write descriptive test names that explain the expected behavior
- Follow the Arrange–Act–Assert pattern

## CVS

- Never add yourself as co-author. All commits must be on behalf of developer
- Commit only staged changes
- Commit message must represent problem solved but not summary of modified files
- Git commits for solutions must follow pattern '#{issue number} {issue name}' for example: '#160 Intersection of Two Linked Lists'
