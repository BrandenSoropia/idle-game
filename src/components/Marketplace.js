import React, { Component } from 'react';

class Marketplace extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={'marketplace'}>
                <span classname={'item'}>
                    <button className={'buy-button'} onClick={() => {}}>Buy</button>
                </span>
            </div>
        )
    }
}

export default Marketplace;