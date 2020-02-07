import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="#7159c1"
      category="Misc"
      date="06 de Fevereiro de 2020"
      timeToRead="5"
      title="Artigo Teste"
      description="ola sasjaisa lasoasns ashuasjopas asuhsa sauh h asuhas asuihasosaas"
    />
  </Layout>
)

export default IndexPage
