// Minimal Bun bundler entrypoint so `bun build` succeeds in this Next.js repo.
// Keep this file tiny and framework-agnostic to avoid Next build constraints.

export function noop(): void {
  // Intentionally empty; used to validate Bun's build pipeline.
}
