import * as React from 'react'
import Actionsheet from '../dist/index'
import './index.scss'

interface AppStates {
    visible: boolean
}

export default class App extends React.Component<{}, AppStates> {

    constructor(props, context) {
        super(props);

        this.state = {
            visible: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.onMaskClick = this.onMaskClick.bind(this);
    }

    onMaskClick() {
        this.setState({
            visible: false
        });
    }

    clickHandler() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const label = <a href="https://github.com/" >github</a>;

        const options = [{
            label: label
        }, {
            label: '选项一',
            callback: () => console.log(2)
        }];
        const options2 = [{
            label: '选项一',
            callback: () => console.log(1)
        }, {
            label: '选项一',
            callback: () => console.log(2)
        }];
        return (
            <section className="container">
                <button className="btn" onClick={this.clickHandler}> action sheet </button>
                <Actionsheet
                    visible={this.state.visible}
                    options={options}
                    onDismiss={this.onMaskClick}
                    onMaskClick={this.onMaskClick}
                />
            </section>
        )
    }
}
