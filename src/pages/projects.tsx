import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Projects = ({ data }: any) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [allProjects, setAllProjects] = useState<any[]>([])


    // Search through all the current projects by search term
    const searchProjects = (searchTerm: string) => {
        const foundProjects: any = [];
        const regexp = new RegExp(searchTerm, 'i')
        allProjects.forEach(project => {
            if (project.frontmatter.slug.match(regexp)) foundProjects.push(project)
        })
        return foundProjects;
    }

    const changeIconColor = (input: any, event: 'focus' | 'blur') => {
        const searchIcon = input.previousSibling;
        searchIcon.style.transition = "color 400ms"
        if (event === 'focus') searchIcon.style.color = '#ff5470'
        else searchIcon.style.color = 'black'
    }

    useEffect(() => {
        setAllProjects(data.allMarkdownRemark.nodes);
    }, [searchTerm])


    const renderProjects: any = (searchTerm: string) => {
        const foundProjects: object[] = searchProjects(searchTerm)
        return foundProjects.map((project: any) => {
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
                    <input type="text"
                        name="search-projects"
                        id="search-projects"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={(e) => changeIconColor(e.target, "focus")}
                        onBlur={(e) => changeIconColor(e.target, "blur")}
                    />
                </div>
            </div>
            <div className="projects-list">
                {renderProjects(searchTerm)}
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
          slug
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