import {ImageSourcePropType} from 'react-native';
import {ReportAction, Report} from '../../../types/onyx';

type PushParams = {
    title: string;
    body?: string;
    icon?: string | ImageSourcePropType;
    delay?: number;
    onClick?: () => void;
    tag?: string;
};

type ReportCommentParams = {
    report: Report;
    reportAction: ReportAction;
    onClick: () => void;
};

type LocalNotificationModule = {
    showCommentNotification: (reportCommentParams: ReportCommentParams) => void;
    showUpdateAvailableNotification: () => void;
};

export type {PushParams, ReportCommentParams, LocalNotificationModule};
