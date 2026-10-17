import type { PropsLocale, PropsRuntime, PropsStore } from '@deepseek-ai/dsh-client-ui-slots';
import type { createAquaRowStore } from './settings-store.ts';
/** Injected business face: every knob write except the master switch. */
export interface AquaAppearanceRowInjected {
    /** Set the rendering mode. */
    setMode: (value: 'mica' | 'compat') => void;
    /** Set the glass blur radius, px. */
    setBlur: (value: number) => void;
    /** Set the glass frost amount, 0-100. */
    setFrost: (value: number) => void;
    /** Set the fluid hue, degrees (0-360, continuous). */
    setFluidHue: (value: number) => void;
    /** Set the fluid depth, 0-100 (continuous). */
    setFluidDepth: (value: number) => void;
    /** Set the background brightness, 0-100 (0 = black, 50 = transparent, 100 = white). */
    setBgBrightness: (value: number) => void;
    /** Set the backdrop source. */
    setBackground: (value: 'fluid' | 'wallpaper') => void;
    /** Set the wallpaper image (a data URL). */
    setWallpaper: (value: string) => void;
    /** Set the particle-whale flag. */
    setWhale: (value: boolean) => void;
    /** Set the ambient marine-life flag. */
    setCritters: (value: boolean) => void;
    /** Set the interactive-mesh flag. */
    setMesh: (value: boolean) => void;
    /** Set the cursor-spotlight flag. */
    setSpotlight: (value: boolean) => void;
    /** Set the hover-press flag. */
    setPress: (value: boolean) => void;
    /** Set the wallpaper blur radius, px. */
    setWallpaperBlur: (value: number) => void;
    /** Set the wallpaper frost veil, 0-100. */
    setWallpaperFrost: (value: number) => void;
    /** Set the video wallpaper blur radius, px. */
    setVideoBlur: (value: number) => void;
    /** Set the video wallpaper brightness, 0-100. */
    setVideoBrightness: (value: number) => void;
    /** Re-read the fsa: video after the user re-granted file access. */
    authorizeVideo: () => void;
}
/** Full component props: runtime share + store share + locale seat + injected face. */
export type AquaAppearanceRowComponentProps = PropsRuntime<'settings.general.item'> & PropsStore<ReturnType<typeof createAquaRowStore>> & PropsLocale<'settings.aqua'> & AquaAppearanceRowInjected;
/**
 * Render the Aqua appearance row.
 * @param props - composed slot props.
 * @returns the General section row.
 */
export declare function AquaAppearanceRow(props: AquaAppearanceRowComponentProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=AquaAppearanceRow.d.ts.map