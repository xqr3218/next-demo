import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connent } from 'react-redux';
import reducers from '../reducers';
import App, { Container } from 'next/app';

let store = createStore(reducers);

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render(){
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        )
    }
}