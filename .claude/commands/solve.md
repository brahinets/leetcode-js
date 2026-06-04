Solve a LeetCode challenge end-to-end. The URL of the challenge is provided as $ARGUMENTS.

## Steps

### 1. Fetch the challenge

Use WebFetch on the provided URL to extract:
- Problem number (e.g. `42`)
- Problem title (e.g. `Trapping Rain Water`)
- Difficulty (`Easy`, `Medium`, or `Hard`)
- Full problem description (constraints, examples, follow-ups)

### 2. Create the solution directory

Create the directory: `solutions/<number>. <title>/`

Also create: `solutions/<number>. <title>/__tests__/`

### 3. Write `script.ts`

File: `solutions/<number>. <title>/script.ts`

Rules:
- Export the main function(s) with `export { functionName }`
- Follow all code style rules from AGENTS.md exactly
- Use explicit TypeScript types on all variables, parameters, and return values
- Always specify generic type arguments explicitly (e.g. `new Map<string, number>()`)
- No semicolons
- 4-space indentation
- Single quotes
- No abbreviations in names
- Opening braces on same line
- Empty line after every closing `}` of a control flow statement unless the next line is also `}`

### 4. Write `__tests__/script.test.ts`

File: `solutions/<number>. <title>/__tests__/script.test.ts`

Rules:
- Import from `'../script'`
- Wrap all tests in `describe('<number>. <title>', (): void => { ... })`
- Each `it` block must have a descriptive name that describes the scenario, not the data
- Do not start test names with "returns"
- Follow Arrange–Act–Assert pattern
- Cover: examples from the problem, edge cases from constraints, any follow-up scenarios
- All type and style rules from AGENTS.md apply here too

### 5. Write `README.md`

File: `solutions/<number>. <title>/README.md`

Format (match existing solution READMEs exactly):

```
# <title>

## <difficulty>

<full problem description, preserving all formatting, constraints, and follow-ups. Do not put examples, they are self-described in tests>
```

### 6. Register in root `README.md`

Open `README.md` at the project root. Inside the `<details>` block, there is a list of solutions ordered numerically by problem number. Insert a new entry in the correct sorted position:

```
1. № [<number>. <title>](solutions/<number>.%20<title>/script.ts)
```

URL-encode spaces as `%20` in the path.

### 7. Run tests

Run: `npx jest "<number>"` to verify the solution passes all tests.

If any test fails, fix `script.ts` (and update tests only if the test itself was wrong) and re-run until all pass.

### 8. Commit

Stage only the new solution files and the updated root README:

```
git add "solutions/<number>. <title>/script.ts"
git add "solutions/<number>. <title>/__tests__/script.test.ts"
git add "solutions/<number>. <title>/README.md"
git add README.md
```

Prepare commit message, must follow the pattern: `#<number> <title>`. But do not commit

Do NOT add yourself as co-author.
