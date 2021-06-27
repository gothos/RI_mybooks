import React from "react";

const withMyBooks = () => Component => class MyBooks extends React.PureComponent {
    componentDidMount() {
        this.props.booksListRequest()
    }

    render() {
        return <Component {...this.props} />

    }
}


export default withMyBooks;