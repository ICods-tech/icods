import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Rubik';
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  height: 100vh;
`

export const SidebarContent = styled.aside`
  position: fixed;
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #A2B5CB;
  align-items: center;
  justify-content: space-between;
`

export const IconsBar = styled.div`
  position: relative;
  :nth-child(1) {
    margin-top: 32px;
  }
  margin-top: 24px;
  cursor: pointer;
`

export const IconsBarWrapper = styled.div`
  padding: 16px 0;
`