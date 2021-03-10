import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "components/container";
import Cta from "components/cta";
import Intro from "components/intro";
import Layout from "components/layout";
import { request } from "lib/datocms";
import { metaTagsFragment } from "lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        homePage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
      }

      ${metaTagsFragment}
    `,
    preview
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest)
          }
    }
  };
}

export default function Index({ subscription }) {
  const {
    data: { site, homePage }
  } = useQuerySubscription(subscription);

  const metaTags = homePage.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <Intro />
          <Cta />
        </Container>
      </Layout>
    </>
  );
}
