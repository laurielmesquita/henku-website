import React from 'react'

import { HeadingWrapper, HeadingHead, HeadingInfo } from './style'

const Heading = ({ headingTitle, headingInfo }) => (
  <HeadingWrapper>
    <HeadingHead>{headingTitle}</HeadingHead>
    <HeadingInfo>{headingInfo}</HeadingInfo>
  </HeadingWrapper>
)

export default Heading
