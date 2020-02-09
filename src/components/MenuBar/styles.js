import styled from 'styled-components'
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
`
export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;
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

  &:hover {
    color: var(--highlight);
  }
`
