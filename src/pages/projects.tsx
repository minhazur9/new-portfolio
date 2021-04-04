import React from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'

const Projects = ({ data }: any) => {
    const allProjects: any = data.allMarkdownRemark.nodes;
    const renderProjects: any = () => {
        return allProjects.map((project: any) => {
            const { title } = project.frontmatter
            return (
                <div key={title} >
                    <h3>{title}</h3>
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
query MyQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
  
`

export default Projects