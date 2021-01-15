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
      <DarkBoxLink to='/machine-learning'>
        Saiba mais
        <svg
          width='25'
          height='10'
          viewBox='0 0 25 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 1L24 5L20 9'
            stroke='currentColor'
            stroke-width='1.3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M7 5L24 5'
            stroke='currentColor'
            stroke-width='1.3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </DarkBoxLink>
    </DarkBoxContent>
    <DarkBoxContent>
      <DarkBoxTag>Data Science</DarkBoxTag>
      <DarkBoxHead>
        Projetos de ciência de dados feitos corretamente
      </DarkBoxHead>
      <DarkBoxLink to='/data-science'>
        Saiba mais
        <svg
          width='25'
          height='10'
          viewBox='0 0 25 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M20 1L24 5L20 9'
            stroke='currentColor'
            stroke-width='1.3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M7 5L24 5'
            stroke='currentColor'
            stroke-width='1.3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </DarkBoxLink>
    </DarkBoxContent>
  </DarkBoxWrapper>
)

export default DarkBox
