import Head from 'next/head';
import { useRouter } from 'next/router';

import { siteTitle } from './layout';

export const HeadComponent = (): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const router = useRouter();

    return (
        <Head>
            <title>{siteTitle}</title>
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default HeadComponent;
