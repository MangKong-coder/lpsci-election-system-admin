// ANCHOR React
import React from 'react';

// ANCHOR Next
import Head from 'next/head';

// ANCHOR Types
import { IChildrenProps } from '@interfaces/Common';

export interface IProps extends IChildrenProps {
  title: string;
  description: string;
}

export const LpsciAppHead = (
  { title, description, children }: IProps,
) => (
  <Head>
    {/* Viewport for responsive web design */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
    {/* Document Title */}
    <title>{title}</title>
    {/* Meta Description */}
    <meta name="description" content={description} />
    {/* IBM Plex */}
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700&display=swap"
      rel="stylesheet"
    />
    <meta name="theme-color" content="#5B36C9" />
    {/* Web Manifest */}
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    {children}
  </Head>
);
