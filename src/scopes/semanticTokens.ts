// https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-coloring-in-color-themes
import { Theme } from "../typing";

interface SemanticToken {
  foreground: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export default function semanticTokens(theme: Theme): { [index: string]: SemanticToken } {
  return {
    "property.declaration": { foreground: theme.ui.default },
  };
}
