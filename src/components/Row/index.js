import React from 'react'

import { RowWrapper } from './style'

const Row = ({ children, nameOfClass }) => (
  <RowWrapper className={nameOfClass}>{children}</RowWrapper>
)

export default Row
