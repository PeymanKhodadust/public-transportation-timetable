export class DateTime {

    public static getFormattedTimeString (date: Date): string{
        let res: string;
        res = date.getHours() < 10 ? "0" + date.getHours() : date.getHours().toString() ;
        res += ":";
        res += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes().toString();
        console.log("return value of date-time: " + res);
        return res;
    }

    public static getFormattedDateString(date: Date) {
        let res: string;
        res = date.getFullYear().toString();
        res += "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1).toString() : date.getMonth() + 1);
        res += "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return res;
    }
}