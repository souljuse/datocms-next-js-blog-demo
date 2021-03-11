import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "components/container";
import Cta from "components/cta";
import QAndA from "components/QAndA";
import Layout from "components/layout";
import Typist from "react-typist";
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
          subtitle
          content {
            ... on QAndARecord {
              question
              answer(markdown: true)
            }
          }
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
            token: process.env.NEXT_DATOCMS_API_TOKEN
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

  console.log(homePage.content.map(qa => <QAndA qa={qa} />));

  const metaTags = homePage.seo.concat(site.favicon);

  return (
    <Layout preview={subscription.preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <section className="header">
          <div>
            <h1 className="header__title">
              <span>AiMug</span> Schema Markup Generator
            </h1>
            <h2 className="header__subtitle">{homePage.subtitle}</h2>
          </div>

          <div className="typing">
            <Typist cursor={{ show: false }}>
              <p className="typing__brackets">{"{"}</p>
              <Typist.Delay ms={500} />
              <p className="typing__text">"@context" : "http://schema.org",</p>
              <Typist.Delay ms={1000} />
              <p className="typing__text">"@type" : "Product",</p>
              <Typist.Delay ms={500} />
              <p className="typing__text">"name" : "AiMUG",</p>
              <Typist.Delay ms={1000} />
              <p className="typing__text">
                "description" : "Safely generate the perfect schema markup",
              </p>
              <Typist.Delay ms={1000} />
              <p className="typing__brackets">{"}"}</p>
            </Typist>
          </div>
        </section>
        <Cta />
        {homePage.content && homePage.content.map(qa => <QAndA qa={qa} />)}
      </Container>
    </Layout>
  );
}
