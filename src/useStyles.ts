import { CSSProperties } from 'react'

export const useStyles = <K extends string = string>(styles: Record<K, CSSProperties>): Record<K, CSSProperties> => styles