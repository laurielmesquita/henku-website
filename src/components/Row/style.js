import styled from 'styled-components'

export const RowWrapper = styled.div`
  --gd-gutter-x: 2.5rem;
  --gd-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--gd-gutter-y) * -1);
  margin-right: calc(var(--gd-gutter-x) / -2);
  margin-left: calc(var(--gd-gutter-x) / -2);

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--gd-gutter-x) / 2);
    padding-left: calc(var(--gd-gutter-x) / 2);
    margin-top: var(--gd-gutter-y);
    margin-right: auto;
    margin-left: auto;
  }
`
