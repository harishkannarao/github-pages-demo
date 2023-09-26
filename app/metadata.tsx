import { Metadata } from 'next'

export const defaultTitle = 'My Sample Site';

export const layoutMetadata: Metadata = {
    description: 'Demo site for showcasing github pages with next js and react',
    keywords: ['next js', 'react'],
    title: defaultTitle
}

export const homePageMetadata: Metadata = {
    title: 'Home | ' + defaultTitle 
}