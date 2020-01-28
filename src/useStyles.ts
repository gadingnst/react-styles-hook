import { Properties } from 'csstype'

export const useStyles = <K extends string = string>(
  styles: Record<K, Properties>
): Record<K, Properties> => styles
