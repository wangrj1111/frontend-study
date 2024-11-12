// TimeUtil.ts

class TimeUtil {
    /**
     * 格式化时间戳为指定格式的字符串。
     * @param timestamp 时间戳，可以是数字或者Date对象
     * @param format 格式字符串，如"YYYY-MM-DD", "HH:mm:ss", "YYYY-MM-DD HH:mm:ss"
     * @param locale 语言环境，默认为"zh-CN"
     * @returns 格式化后的时间字符串
     */
    static format(timestamp: number | Date, format: string = "YYYY-MM-DD HH:mm:ss", locale: string = "zh-CN"): string {
        let date = timestamp instanceof Date ? timestamp : new Date(timestamp);
        
        // 根据提供的格式字符串构建Intl.DateTimeFormat的options
        const options: Intl.DateTimeFormatOptions = {};
        switch (format) {
            case "YYYY-MM-DD":
                options.year = 'numeric';
                options.month = '2-digit';
                options.day = '2-digit';
                break;
            case "HH:mm:ss":
                options.hour = '2-digit';
                options.minute = '2-digit';
                options.second = '2-digit';
                break;
            case "YYYY-MM-DD HH:mm:ss":
            default:
                options.year = 'numeric';
                options.month = '2-digit';
                options.day = '2-digit';
                options.hour = '2-digit';
                options.minute = '2-digit';
                options.second = '2-digit';
                break;
        }

        // 使用Intl.DateTimeFormat进行格式化
        const formatter = new Intl.DateTimeFormat(locale, options);
        return formatter.format(date);
    }
}

export default TimeUtil;