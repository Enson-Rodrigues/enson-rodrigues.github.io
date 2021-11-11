import React, { Component } from 'react';

const LoadingHOC = (ContactList) => {
    return class LoadingHOC extends Component {
        render() {
            return this.props.details.loadingFlag  ? 
                    <ContactList {...this.props}/> 
                    :
                    (this.props.details.errorMsgFlag ? <h3>Network Error, Sorry for inconviennce</h3>:<h1>Loading.....</h1>)
        }
    }
}

export default LoadingHOC;