declare class Drawing {
    #private;
    static defaults: {
        stroke: string;
        pxratio: number;
    };
    static DT_CANVAS: number;
    static DT_SVG: number;
    constructor(mode: number, settings: any);
    clear(): void;
    rect(position: any, dimensions: any): void;
    circle(position: any, radius: any): void;
    line(a: any, b: any): void;
    polyline(points: any): void;
    path(path: any): void;
    polygon(points: any): void;
    download(): void;
    addTo(element: any): this;
    size(d: any): this;
    set dimensions(v: any);
    get dimensions(): any;
    set pxratio(v: number);
    get pxratio(): number;
    get drawing(): any;
    get c(): any;
    set stroke(v: any);
    get stroke(): any;
    get svgStroke(): any;
    set fill(v: any);
    get fill(): any;
    get svgFill(): any;
    set mode(v: any);
    get mode(): any;
    set saving(v: boolean);
    get saving(): boolean;
}
export default Drawing;
