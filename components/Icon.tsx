export type IconName =
  | "arrow" | "left" | "up" | "chev" | "close" | "plus" | "road" | "city" | "medal" | "clock"
  | "chip" | "team" | "leaf" | "mail" | "phone" | "pin" | "upload" | "check" | "zoom" | "in";

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
