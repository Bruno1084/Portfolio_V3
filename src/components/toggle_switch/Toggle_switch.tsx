import type { ReactNode } from "react";
import "./toggle_switch.css";

interface ToggleSwitchProps {
  checked: boolean;
  label: string;
  title: string;
  onToggle: () => void;
  children: ReactNode;
}

export function Toggle_switch({
  checked,
  label,
  title,
  onToggle,
  children,
}: ToggleSwitchProps): ReactNode {
  return (
    <button
      className="toggle-switch"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      title={title}
      onClick={onToggle}
    >
      <span className="toggle-switch-thumb">{children}</span>
    </button>
  );
}
