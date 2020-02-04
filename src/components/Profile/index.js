import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetMetadataSite {
          site {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      `}
      render={({
        site: {
          siteMetada: { title, description, author },
        },
      }) => (
        <div className="Profile-wrapper">
          <h1>{title}</h1>
          <h2>{author}</h2>
          <p>{description}</p>
        </div>
      )}
    />
  )
}

export default Profile
