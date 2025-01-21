import { fileURLToPath, URL } from 'node:url'

/**
 * Convert a relative path to an absolute path based on the project root.
 * @param relativePath - The relative path from the project root (e.g., './src/composables').
 * @returns The absolute path.
 */
export function resolvePath(relativePath: string): string {
  return fileURLToPath(new URL(relativePath, import.meta.url))
}
