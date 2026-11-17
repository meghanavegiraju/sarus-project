export const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
export const phoneOk = (v: string) => /^[0-9+\-\s()]{7,}$/.test(v);
export const MAX_FILE = 10 * 1024 * 1024;

// No backend: forms hand off to the visitor's email app.
export function openMail(to: string, subject: string, body: string) {
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
