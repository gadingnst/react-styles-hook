import * as CSS from "csstype";

export const useStyles = <K extends string = string>(
  styles: Record<K, CSS.Properties>
): Record<K, CSS.Properties> => styles;
