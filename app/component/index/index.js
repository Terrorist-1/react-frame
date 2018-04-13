import React from 'react';
import '../../public/css/index.pcss';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>这是头部1</div>
                    <i className="logo"/>

                </div>
                <div className="bottom">
                    这是底部2
                </div>
                <div>
                    Seconds: {this.state.seconds}
                </div>
            </div>

        );
    }
}

export default Index;