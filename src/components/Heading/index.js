import React from 'react'

import { HeadingWrapper, HeadingHead, HeadingInfo } from './style'

const Heading = ({ nameClass, headingTitle, headingInfo }) => (
  <HeadingWrapper className={nameClass}>
    <HeadingHead>{headingTitle}</HeadingHead>
    <HeadingInfo>{headingInfo}</HeadingInfo>
  </HeadingWrapper>
)

export default Heading
