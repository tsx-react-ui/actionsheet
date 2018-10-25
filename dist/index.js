/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Actionsheet
 * Desc The actionsheet component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import Mask from '@tsx-react-ui/mask';
import './index.scss';
export default class Actionsheet extends React.Component {
    constructor(props) {
        super(props);
        this.outAnimationTime = null;
        this.state = {
            isActive: false
        };
    }
    componentWillReceiveProps(nextProps) {
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
        let { options, visible, opacity, className, onDismiss, onMaskClick } = this.props;
        let { isActive } = this.state;
        return (React.createElement(Mask, { visible: visible, opacity: opacity, className: "custom", onMaskClick: onMaskClick },
            React.createElement(CSSTransition, { in: visible, classNames: "pop", timeout: 500 }, isActive ? (React.createElement("div", { key: "actionsheet", className: `lm-actionsheet ${className}` },
                React.createElement("div", { className: "lm-actionsheet-menu" }, options.map((item, index) => {
                    return React.createElement("div", { key: index, className: "lm-actionsheet-item", onClick: item.callback }, item.label);
                })),
                React.createElement("div", { className: "lm-actionsheet-action" },
                    React.createElement("div", { className: "lm-actionsheet-item", onClick: onDismiss }, "\u53D6\u6D88")))) : React.createElement("div", null))));
    }
}
Actionsheet.defaultProps = {
    opacity: 0.5,
    className: '',
    onMaskClick: () => { }
};
//# sourceMappingURL=index.js.map