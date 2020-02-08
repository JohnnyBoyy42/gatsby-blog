import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styles'

const Comments = ({ url, title }) => {
  const completeURL = `https://fin.com.br${url}`

  return (
    <S.CommentWrapper>
      <S.CommentsTtile>Comentários</S.CommentsTtile>
      <ReactDisqusComments
        shortname="Finn"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
