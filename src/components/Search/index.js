import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchonlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchonlyApiKey)

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox />
      <Stats />
      <Hits />
    </InstantSearch>
  )
}

export default Search
