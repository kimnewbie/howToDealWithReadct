import { useCallback, useState } from 'react';
import { Route } from '../../node_modules/react-router-dom/index';
import Categories from './Categories';
import NewsList from './NewsList';
import NewsPage from './NewsPage';

/**
 * 
 * https://newsapi.org/account
 */

const AxiosApp = () => {
    return <Route path="/:category?" component={NewsPage} />
};

export default AxiosApp;

/* JSON.stringify(data, null, 2) 입력한 숫자 2만큼 공백이 생긴다  */ 