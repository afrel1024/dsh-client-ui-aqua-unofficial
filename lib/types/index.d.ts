import z from '@deepseek-ai/schemastery';
/** Retained schema export for integrations using the former host namespace. */
export interface AquaSettings {
    enabled: boolean;
}
export declare const AQUA_SETTINGS_NAMESPACE = "aqua";
export declare const AquaSettingsSchema: z<AquaSettings>;
/** DSH 0.2 uses feature-owned settings tabs; preferences remain browser-local. */
export declare function apply(): void;
//# sourceMappingURL=index.d.ts.map