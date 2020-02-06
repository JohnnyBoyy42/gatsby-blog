import React from 'react'

import * as S from './styles'

const PostItem = () => (
  <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag>Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          06 de Fevereiro de 2020 • 4 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao Medium: Tenha sua própia plataforma
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de
          soluções como o Medium.
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
