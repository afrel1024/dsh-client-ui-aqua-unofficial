import z from '@deepseek-ai/schemastery'

/** Retained schema export for integrations using the former host namespace. */
export interface AquaSettings { enabled: boolean }
export const AQUA_SETTINGS_NAMESPACE = 'aqua'
export const AquaSettingsSchema: z<AquaSettings> = z.object({ enabled: z.boolean().default(true) })

/** DSH 0.2 uses feature-owned settings tabs; preferences remain browser-local. */
export function apply(): void {}
