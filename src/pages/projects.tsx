import React from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Projects = ({ data }: any) => {
    const allProjects: any = data.allMarkdownRemark.nodes;
    const renderProjects: any = () => {
        return allProjects.map((project: any) => {
            const { title, thumb } = project.frontmatter
            const { gatsbyImageData } = thumb.childImageSharp
            return (
                <div key={title} className="project" >
                    <h3>{title}</h3>
                    <GatsbyImage image={gatsbyImageData} alt={title} className="project-thumb" />
                </div>

            )
        })
    }

    return (
        <Layout>
            <div className="projects-container-header">
                <h1>Projects</h1>
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} size='1x' className="search-icon" />
                    <input type="text" name="search-projects" id="search-projects" />
                </div>
            </div>
            <div className="projects-list">
                {renderProjects()}
            </div>
        </Layout>
    )
}

export const query = graphql`
query allProjectsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  
  
`

export default Projects