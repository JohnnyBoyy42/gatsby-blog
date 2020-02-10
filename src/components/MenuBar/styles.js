import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  height: 100vh;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;

  ${media.lessThan('large')`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;

  ${media.lessThan('large')`
    flex-direction: row;
    padding-bottom: 0;
  `}
`
export const MenuBarLink = styled(Link)`
  display: block;
`
export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 1.75rem;
  padding: 1.1rem;
  position: relative;
  width: 1.75rem;
  transition: color 0.5s;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    height: 1.5rem;
    padding: .9rem;
    /* position: relative; */
    width: 1.5rem;
  `}
`
