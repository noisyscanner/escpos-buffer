import { Connection } from '../connection';
import { Font, Capability } from '../capabilities';
import { Align, Drawer, Style, Cut } from '../Printer';
import Image from '../graphics/Image';
export declare abstract class Profile {
    private _columns;
    private _codepage;
    private _font;
    private _connection;
    protected capabilities: Capability;
    constructor(capabilities: Capability);
    abstract feed(lines: number): void;
    abstract cutter(mode: Cut): void;
    abstract buzzer(): void;
    abstract drawer(number: Drawer, on_time: number, off_time: number): void;
    abstract set alignment(align: Align);
    abstract qrcode(data: string, size: number): Promise<void>;
    protected abstract setMode(mode: number, enable: boolean): void;
    protected abstract setStyle(style: Style, enable: boolean): void;
    write(text: string, styles: number): void;
    writeln(text: string, styles: number, align: Align): void;
    protected get bitmapCmd(): string;
    draw(image: Image): void;
    protected drawQrcode(data: string, size: number): Promise<void>;
    get connection(): Connection;
    set connection(value: Connection);
    get name(): string;
    get columns(): number;
    set columns(value: number);
    get defaultColumns(): number;
    set font(value: Font);
    get font(): Font;
    get fonts(): Font[];
    set codepage(value: string);
    private applyCodePage;
    protected fontChanged(_: Font, __: Font): void;
    initialize(): void;
    finalize(): void;
}
