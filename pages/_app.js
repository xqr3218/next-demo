import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connent } from 'react-redux';
import App, { Container } from 'next/app';

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props;
        return (
            <div>12sadfasdf</div>
        )
    }
}