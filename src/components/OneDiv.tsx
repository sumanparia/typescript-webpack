import * as React from "react";

import './OneDiv.scss';

interface ParentFlex {
    flexDirection: any,
    flexWrap : any,
    justifyContent : any,
    alignItems : any,
    alignContent : any
}
interface CurrentFlex {
    order : any,
    flexGrow: any,
    flexShrink: any,
    flexBasis: any,
    alignSelf: any
}
interface IStateOneDiv {
    parentState: ParentFlex,
    currentFlex: CurrentFlex,
    border: {
        borderStyle: any
    },
    childrenCount : number
}
interface IPropsOneDiv {
}

export class OneDiv extends React.Component<IPropsOneDiv, IStateOneDiv> {

    constructor(props: IPropsOneDiv) {
        super(props);
        this.state = {
            parentState: {
                flexDirection: 'row',
                flexWrap : 'nowrap',
                justifyContent : 'flex-start',
                alignItems : 'stretch',
                alignContent : 'stretch'
            },
            currentFlex: {
                order : 0,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 'auto',
                alignSelf: 'auto'
            },
            border: {
                borderStyle: 'solid'
            },
            childrenCount : React.Children.count(this.props.children)
        };
    }

    private mouseEnterOrLeave(key: boolean) {
        if (key) {
            console.log(this.state.border);
            this.setState({ border: { borderStyle: 'dotted' } });
        } else {
            console.log(this.state.border);
            this.setState({ border : {borderStyle: 'solid' } });
        }

    }

    render() {
        return (
            <div onMouseLeave={ e => this.mouseEnterOrLeave(false) } onMouseEnter={ e => this.mouseEnterOrLeave(true) }  style={{ ...this.state.parentState, ...this.state.currentFlex, ...this.state.border }}> {this.state.childrenCount===0?'Some text':''} {this.props.children}</div>
        );
    }
}