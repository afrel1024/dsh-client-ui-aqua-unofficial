/** One slider + number box, wired to a single value. */
export interface KnobProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    unit: string;
    onChange: (value: number) => void;
}
/** Render one knob row. */
export declare function Knob({ label, value, min, max, step, unit, onChange }: KnobProps): import("react/jsx-runtime").JSX.Element;
/** One segment of a Segmented picker. */
export interface SegmentedOption<T extends string> {
    id: T;
    label: string;
}
export interface SegmentedProps<T extends string> {
    /** Accessible name for the button group. */
    label: string;
    value: T;
    options: readonly SegmentedOption<T>[];
    onSelect: (value: T) => void;
}
/** Render a two-button segmented picker. */
export declare function Segmented<T extends string>({ label, value, options, onSelect }: SegmentedProps<T>): import("react/jsx-runtime").JSX.Element;
/** Read a file, downscale to ≤1920px, and return a compact JPEG data URL. */
export declare function fileToDataUrl(file: File): Promise<string>;
//# sourceMappingURL=AquaControls.d.ts.map