# AGENTS.md

## Purpose

This repository should follow strict TypeScript practices by default. Treat these rules as project conventions when creating, editing, or reviewing code.

## Highest Priority

- Prefer simple, explicit, strongly typed code.
- Prefer compiler/linter-enforced correctness over comments or conventions.
- Run `npm run typecheck` and `npm run lint` after meaningful TypeScript changes when possible.
- Do not hide TypeScript errors with casts, suppression comments, or loose types.
- If an instruction conflicts with the project’s `tsconfig.json`, ESLint config, or framework requirements, follow the enforced project configuration and explain the conflict.

## Focused Standards

- When editing HTML, JSX, TSX markup, forms, navigation, layout structure, or accessibility-related UI, follow `docs/standards/html.md`.
- Keep generated markup simple, semantic, accessible, and easy to scan.
- Do not add new markup abstractions, wrapper components, or ARIA unless they solve a real problem.

## TypeScript Rules

- Never use `any`.
- Avoid type assertions (`as`) unless there is no safer alternative.
- Prefer `satisfies` over `as` when validating object shapes.
- Never use non-null assertions (`!`) unless there is no safer alternative.
- Prefer `unknown` over `any` for untrusted values.
- Prefer `type` over `interface`.
- Do not prefix types or interfaces with `I` or `T` unless that is naturally part of the domain name.
- Never use TypeScript `enum`; prefer readonly object literals plus union types.
- Prefer explicit return types for exported functions.
- Prefer discriminated unions over loose optional fields.
- Avoid optional properties unless the value is truly optional.
- Prefer narrowing over casting.
- Prefer exhaustive `switch` statements for unions.
- Prefer `const` by default; use `let` only when reassignment is required.
- Use `Array<T>` / `ReadonlyArray<T>` instead of `T[]`.
- Prefer `ReadonlyArray<T>` when the array should not be modified.
- Prefer readonly types for immutable data, but do not wrap every object in `Readonly<T>` if it makes code noisier without improving safety.

## Type Safety Escape Hatches

- Do not use double casts like `value as unknown as SomeType`. If this seems necessary, fix the source types instead.
- Never use `@ts-ignore`.
- Use `@ts-expect-error` only when absolutely necessary, and always include a short explanation.
- Treat `response.json()`, `JSON.parse()`, request bodies, URL params, and external API responses as untrusted data.
- Validate untrusted data with Zod or a type guard before accessing nested properties.
- For third-party libraries with missing or incomplete types, prefer module augmentation or declaration files over casting to `any`.
- In `catch` blocks, treat errors as `unknown`; narrow with `instanceof Error` or a helper before accessing properties.

## Typed Imports

- Use `import type` for type-only imports.
- Keep runtime imports and type-only imports clearly separated.

## Classes

- Add explicit accessibility modifiers (`public`, `private`, `protected`) to class members and methods.
- Prefer `private` for class members not used outside the class.
- Use `override` when overriding class members.

## Environment Variables

- Never use `process.env` directly in application code.
- Import environment values from the project environment module, usually `process-env.ts` or the closest equivalent.
- Validate environment variables at the boundary.

## Zod and Validation

- Validate external input with Zod at boundaries.
- Validate all incoming POST bodies with Zod before use.
- Do not use `Number()`, `Boolean()`, or ad hoc parsing as validation.
- For integers, use Zod integer validation such as `.int()`.
- For non-empty strings, validate minimum length.
- Avoid `.optional()` unless the field is truly optional and the downstream type should reflect that.
- Keep frontend/backend request and response schemas shared when practical.
- Treat `response.json()`, `JSON.parse()`, request bodies, URL params, and external API responses as untrusted data.
- Validate untrusted data with Zod or a type guard before accessing nested properties.

## Database Access

- Do not call the database client directly from random application code.
- Put database access behind repository modules such as `user.repository.ts`.
- Keep query construction close to repository code.

## Imports and Paths

- Before generating a long relative import path, check whether the target directory exposes an `index.ts` barrel export.
- If a local import can use a configured alias such as `@/lib`, prefer the alias over long `../../lib` paths.
- Do not import from `../../lib` when `@/lib` is available.

## ESM Imports

- In Node ESM projects using `moduleResolution: "NodeNext"` or `"Node16"`, use explicit `.js` extensions for relative runtime imports.
- Do not blindly add `.js` extensions in bundler-based projects unless the project convention requires it.

## Frontend Routes

- Do not hardcode internal route strings.
- Import internal routes from `frontend-routes.ts` or the project route registry.
- This applies to `Link`, `router.push`, redirects, and similar routing helpers.

## Default Exports

- Do not use default exports except where a framework requires them, such as Next.js page/layout files.
- Prefer named exports.

```ts
// bad
export default adminRoutes;

// good
export { adminRoutes };
```
