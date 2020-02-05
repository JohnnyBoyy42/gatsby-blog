import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "kratos-profile.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <S.AvatarWrapper
      fixed={avatarImage.childImageSharp.fixed}
      fadeIn={true}
      durationFadeIn={'1000'}
    />
  )
}

export default Avatar
