/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Actionsheet
 * Desc The actionsheet component of the react written in Typescript
 * GroupName tsx-react-ui
 */
import * as React from 'react'
import { ReactEventHandler } from 'react'

import './index.scss';

interface ActionsheetProps {
    content: string;
    styles ?: string;
    handle ?: ReactEventHandler<HTMLParagraphElement>;
}

const defaultProps: ActionsheetProps = {
    content: 'React test Actionsheet',
    styles: '',
    handle: () => {console.log('handle action');}
};

const Actionsheet: React.SFC<ActionsheetProps> = ({
                content,
                styles,
                handle,
                ...others
             }) => {

    return (

        <div>
            <p className={`btn ${styles}`} onClick={handle}> {content} </p>
        </div>

    )

};

Actionsheet.defaultProps = defaultProps;

export default Actionsheet;
