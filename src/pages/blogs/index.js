import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    console.log(data),
    <Layout pageTitle="My Blog Posts">
      {
        // insert a console log to see what the data looks like
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>slug: <u><Link to={`/blogs/${node.frontmatter.slug}`}>{node.frontmatter.slug}</Link></u></p>
            {console.log(node.frontmatter)}
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
