import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import BG from '../components/bg'
import SEO from '../components/seo'
import Layout from '../layouts'

const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  border-bottom: 1px solid;
  border-image: linear-gradient(var(--angle), aqua, aqua, magenta, magenta) 1;
	
	animation: 15s rotate linear infinite;
}

@keyframes rotate {
	to {
		--angle: 360deg;
	}
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

  @media (max-width: 960px) {
    margin-bottom: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const StyledBlog = styled.div`
  padding: 0 2rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem;
  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    margin-bottom: 0;
  }
`

const PostsWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  align-items: flex-start;
  grid-auto-rows: 1fr;
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
    grid-auto-rows: auto;
  }
`

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  justify-content: space-between;
  padding: 0 2rem;
  padding-top: 2rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey2};

  @media (max-width: 960px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0rem;
    padding-top: 1rem;

    border-bottom: 0;
  }
`

const Title = styled.h1`
  font-size: 72px;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;

  @media (max-width: 960px) {
    font-size: 2rem;
    text-align: center;
  }
`

const StyledBodySubTitle = styled.h2`
  max-width: 900px;
  line-height: 150%;
  font-weight: 400;
  text-align: left;

  @media (max-width: 640px) {
    text-align: center;
    font-size: 20px;
  }
`

export const Posts = styled.div`
  position: relative;
  width: auto;
  height: 475px;
  text-decoration: none;
  border-radius: 20px 20px 50px 0;
  background-color: ${({ theme }) => theme.cardBG};
  backdrop-filter: blur(2px);
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);
  border: 1px solid rgba(0, 0, 0, 0);
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.grey3};
  }
  h1 {
    max-width: 960px;
  }
  a {
    color: ${({ theme }) => theme.textColor};
  }
  p {
    max-width: 450px;
  }
  p:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 960px) {
    width: 100%;
    height: 475px;
    margin-bottom: 3rem;
  }
`

export const PostLinkWrapper = styled(Link)`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
  }
`

export const PostTitleWrapper = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  h2 {
    font-size: 36px;
  }

  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
    h2 {
      font-size: 25px;
  }
`

export const PostMetaData = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.grey6};
  width: 100%;
  justify-self: flex-end;
  p {
    width: initial;
  }
`

export const StyledImage = styled(Img)`
  width: 100%;
  border-radius: 12px;
  height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 960px) {
    height: 256px;
  }
  @media (max-width: 600px) {
    height: 160px;
  }
`

export const NewPill = styled.p`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.colors.link};
  padding: 0rem 0.5rem;
  position: absolute;
  left: -1rem;
  top: -0.75rem;
  border-radius: 1rem;
  text-align: center;
  margin: 0;
  transform: rotateZ(-20deg);
  z-index: 99;
`

const Blog = props => {
  const data = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }, sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              title
              previewText
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout path={props.location.pathname}>
      <SEO title="Blog" path={props.location.pathname} />

      <StyledAbout>
        <span style={{ marginTop: '5rem' }}>
          <Title style={{ fontFamily: 'True' }}>BLOG</Title>
          <StyledBodySubTitle>
            {'Updates, stories, and announcements from the Nerve Team & Community.'}
          </StyledBodySubTitle>
        </span>
      </StyledAbout>

      <StyledBody>
        <StyledBlog>
          <PostsWrapper>
            {data.allMdx.edges.map(({ node }, index) => {
              return (
                <Posts wide={index} key={node.id}>
                  <PostLinkWrapper wide={index} to={node.fields.slug}>
                    {index === 0 && <NewPill>New</NewPill>}
                    <PostTitleWrapper>
                      <h2 style={{ marginTop: '0px' }}>{node.frontmatter.title}</h2>
                      {node.frontmatter.previewText ? <p>{node.frontmatter.previewText} </p> : ''}
                      <PostMetaData>{node.frontmatter.date + ' - ' + node.fields.readingTime.text}</PostMetaData>
                    </PostTitleWrapper>
                    {node.frontmatter.featuredImage && (
                      <StyledImage fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                    )}
                  </PostLinkWrapper>
                </Posts>
              )
            })}
          </PostsWrapper>
        </StyledBlog>
      </StyledBody>
      <BG />
    </Layout>
  )
}

export default Blog
