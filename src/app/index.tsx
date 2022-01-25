/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { TestPage, TestPage2, TestPage3 } from './pages/TestPage';

export function App() {
  const { i18n } = useTranslation();
  // const history = useHistory();
  // React.useEffect(() => {
  //   const urlReplace = () => {
  //     history.replace(history.location + '/bbb');
  //   };
  //   if (history) {
  //     urlReplace();
  //   }
  // }, [history]);
  return (
    <BrowserRouter>
      <Helmet
        // titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/aaa'} component={TestPage} />
        <Route exact path={process.env.PUBLIC_URL + '/bbb'} component={TestPage2} />
        <Route exact path={process.env.PUBLIC_URL + '/_abc'} component={TestPage2} />
        <Route exact path={process.env.PUBLIC_URL + '/_abc/bbb'} component={TestPage3} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
