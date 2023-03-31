export class OecmDate {

    public static extend(value: number): string | number {
        return value < 10 ? `0${value}` : value
    }

    public static toLongDate(value: Date): string {
        return `${value.getFullYear()}-${OecmDate.extend(value.getMonth())}-${OecmDate.extend(value.getDate())}`
    }

}
