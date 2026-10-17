import type { InjectFace, PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots';
import type { createAquaRowStore } from './settings-store.ts';
/** Injected business face: the master enable write. */
export interface AquaPluginCardInjected {
    /** Switch the glass layer on or off. */
    setEnabled: (enabled: boolean) => void;
}
/** Full component props: runtime share + store share + locale seat + injected face. */
export type AquaPluginCardComponentProps = PropsRuntime<'settings.plugins.tab'> & PropsStore<ReturnType<typeof createAquaRowStore>> & PropsLocale<'settings.aqua'> & InjectFace<AquaPluginCardInjected>;
/**
 * Render the Aqua plugin card.
 * @param props - composed slot props.
 * @returns the theme settings panel.
 */
export declare function AquaPluginCard(props: AquaPluginCardComponentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AquaPluginCard.d.ts.map