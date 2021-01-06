import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  color: #fff;
  text-align: center;
  background-color: var(--deepDark);
  padding: calc(13vw + 6px) 0 3rem;

  @media (min-width: 576px) {
    padding: 5rem 0 3rem;
  }

  @media (min-width: 768px) {
    padding: 5.25rem 0 3.8rem;
  }

  @media (min-width: 992px) {
    padding: 6.25rem 0 5rem;
  }

  @media (min-width: 1200px) {
    padding: 8.25rem 0 5rem;
  }

  @media (min-width: 1386px) {
    padding: 10rem 0 5rem;
  }
`

export const Copyright = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.4);
  }

  img {
    display: block;
    width: 104.53px;
    height: 40px;
    margin: 3.75rem auto 1.875rem;
  }

  small {
    font-size: 0.8125rem;
  }
`
