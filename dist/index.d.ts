/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Actionsheet
 * Desc The actionsheet component of the react written in Typescript
 * GroupName tsx-react-ui
 */
/// <reference types="node" />
import * as React from 'react';
import './index.scss';
/**
 * @class Actionsheet
 * @extends React.Component
 * @desc Actionsheet Component for mobile
 */
declare type OptionsType = {
    label: React.ReactNode | string;
    callback?: () => void;
}[];
interface ActionsheetProps {
    visible: boolean;
    options: OptionsType;
    onDismiss: () => void;
}
interface DefaultProps {
    opacity?: number;
    className?: string;
    onMaskClick?: () => void;
}
interface ActionsheetStates {
    isActive: boolean;
}
export default class Actionsheet extends React.Component<ActionsheetProps & DefaultProps, ActionsheetStates> {
    static defaultProps: DefaultProps;
    outAnimationTime: NodeJS.Timeout | null;
    constructor(props: ActionsheetProps);
    componentWillReceiveProps(nextProps: ActionsheetProps & DefaultProps): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
