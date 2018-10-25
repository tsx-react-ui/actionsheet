/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Actionsheet
 * Desc The actionsheet component of the react written in Typescript
 * GroupName tsx-react-ui
 */

import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import Mask from '@tsx-react-ui/mask'

import './index.scss'


/**
 * @class Actionsheet
 * @extends React.Component
 * @desc Actionsheet Component for mobile
 */

type OptionsType = {
    label: React.ReactNode | string;
    callback?: () => void;
}[]

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

    static defaultProps: DefaultProps = {
        opacity: 0.5,
        className: '',
        onMaskClick: () => { }
    };

    outAnimationTime: NodeJS.Timeout | null;
    constructor(props: ActionsheetProps) {
        super(props);
        this.outAnimationTime = null;
        this.state = {
            isActive: false
        }
    }

    componentWillReceiveProps(nextProps: ActionsheetProps & DefaultProps) {
        //隐藏的时候执行动画
        if (this.props.visible === false && nextProps.visible === true) {
            this.setState({
                isActive: true
            });
        }
        if (this.props.visible === true && nextProps.visible === false) {
            this.outAnimationTime = setTimeout(() => {
                this.setState({
                    isActive: false
                });
            }, 300);
        }
    }
    componentWillUnmount() {
        if (this.outAnimationTime !== null) {
            clearTimeout(this.outAnimationTime);
        }
    }

    render() {

        let {
            options,
            visible,
            opacity,
            className,
            onDismiss,
            onMaskClick
        } = this.props;

        let {
            isActive
        } = this.state;

        return (
            <Mask visible={visible} opacity={opacity} className="custom" onMaskClick={onMaskClick}>
                <CSSTransition in={visible} classNames="pop" timeout={500}>
                    {isActive ? (

                        <div key="actionsheet" className={`lm-actionsheet ${className}`}>

                            <div className="lm-actionsheet-menu">
                                {
                                    options.map((item, index) => {

                                        return <div key={index} className="lm-actionsheet-item" onClick={item.callback}>{item.label}</div>

                                    })

                                }
                            </div>

                            <div className="lm-actionsheet-action">
                                <div className="lm-actionsheet-item" onClick={onDismiss}>取消</div>
                            </div>
                        </div>) : <div />}
                </CSSTransition>
            </Mask>
        )
    }

}
