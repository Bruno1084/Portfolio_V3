import type { ReactNode } from "react";
import { Language_toggle } from "../language_toggle/Language_toggle";
import { Theme_toggle } from "../theme_toggle/Theme_toggle";
import "./page_controls.css";

export function Page_controls(): ReactNode {
  return (
    <div className="page-controls">
      <Language_toggle />
      <Theme_toggle />
    </div>
  );
}
