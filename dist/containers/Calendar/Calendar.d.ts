import { DateSetup } from '../../types/date-setup';

export type CalendarProps = {
    dateSetup: DateSetup;
    locale: string;
    rtl: boolean;
    headerHeight: number;
    columnWidth: number;
    rootStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    bottomTextStyle?: React.CSSProperties;
};
export declare const Calendar: (props: CalendarProps) => import("react/jsx-runtime").JSX.Element;
