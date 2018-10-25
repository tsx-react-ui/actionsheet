/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Actionsheet
 * Desc The actionsheet component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import Mask from '@tsx-react-ui/mask'


import './index.scss';

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

const defaultProps: DefaultProps = {
    opacity: 0.5,
    className: '',
    onMaskClick: () => { }
};

const Actionsheet: React.SFC<ActionsheetProps & DefaultProps> = ({
    options,
    visible,
    opacity,
    className,
    onDismiss,
    onMaskClick,
    ...others
}) => {

    return (
        <Mask visible={visible} opacity={opacity} className="custom" onMaskClick={onMaskClick}>
            <CSSTransition in={visible} classNames="pop" timeout={500}>
                {visible ? (

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
};

Actionsheet.defaultProps = defaultProps;

export default Actionsheet;
