import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

interface PropsType {
  title: string;
}

export function BasePage(props: PropsType) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.title} />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <div>
          <h1>
            <p>ogp test page1</p>
          </h1>
        </div>
      </PageWrapper>
    </>
  );
}