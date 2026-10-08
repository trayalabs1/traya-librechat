import { megabyte } from 'librechat-data-provider';

/** Reads a limit in MB from an env var (bytes returned); invalid or unset values fall back to the default. */
export function envMegabytes(name: string, defaultMB: number): number {
  const n = Number(process.env[name]?.trim());
  return (Number.isFinite(n) && n > 0 ? n : defaultMB) * megabyte;
}
