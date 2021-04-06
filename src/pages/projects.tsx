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
        searchTerm = searchTerm.replace(/[^a-zA-Z0-9]/g, '');
        const regexp = new RegExp(searchTerm, 'i')
        allProjects.forEach(project => {
            const { slug, stackSlug } = project.frontmatter;
            if (slug.match(regexp) || stackSlug.match(regexp)) foundProjects.push(project);
        })
        return foundProjects;
    }

    // Change color of search icon
    const changeIconColor = (input: any, event: 'focus' | 'blur') => {
        const searchIcon = input.previousSibling;
        searchIcon.style.transition = "color 400ms"
        if (event === 'focus') searchIcon.style.color = '#ff5470'
        else searchIcon.style.color = 'black'
    }

    useEffect(() => {
        const abortController = new AbortController();
        setAllProjects(data.allMarkdownRemark.nodes);
        () => abortController.abort()
    }, [searchTerm])


    const renderProjects: any = (searchTerm: string) => {
        const foundProjects: object[] = searchProjects(searchTerm)
        return foundProjects.map((project: any) => {
            const { html } = project;
            const { title, thumb, stack, live, github } = project.frontmatter;
            const { gatsbyImageData } = thumb.childImageSharp;
            return (
                <div key={title} className="project">
                    <h3>{title}</h3>
                    <GatsbyImage image={gatsbyImageData} alt={title} className="project-thumb" />
                    <div className="project-info">
                        <p className="desc" dangerouslySetInnerHTML={{ __html: html }} ></p>
                        <p className="stack">Stack: {stack}</p>
                        <a href={live} target="_blank" className="live-link">Live</a>
                        <a href={github} target="_blank" className="github-link">Github</a>

                    </div>
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
                        placeholder="Search for names or tech"
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
          stack
          stackSlug
          live
          github
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        html
      }
    }
  }
  
  
`

export default Projects