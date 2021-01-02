import React from 'react'

import {
  DarkBoxWrapper,
  DarkBoxContent,
  DarkBoxHead,
  DarkBoxTag,
  DarkBoxLink
} from './style'

const DarkBox = () => (
  <DarkBoxWrapper>
    <DarkBoxContent>
      <DarkBoxTag>Machine Learning</DarkBoxTag>
      <DarkBoxHead>
        Machine Learning helps solve complex data challenges
      </DarkBoxHead>
      <DarkBoxLink to='/machine-learning'>Saiba mais →</DarkBoxLink>
    </DarkBoxContent>
    <DarkBoxContent>
      <DarkBoxTag>Data Science</DarkBoxTag>
      <DarkBoxHead>
        Projetos de ciência de dados feitos corretamente
      </DarkBoxHead>
      <DarkBoxLink to='/data-science'>Saiba mais →</DarkBoxLink>
    </DarkBoxContent>
  </DarkBoxWrapper>
)

export default DarkBox
