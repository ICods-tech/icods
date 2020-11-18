import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Rubik';
  display: flex;
  flex: 1;
  position: relative;
  height: 100vh;
`

export const Sidebar = styled.aside`
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
  margin-top: 16px;
  cursor: pointer;
`

export const IconsBarWrapper = styled.div`
  padding: 16px 0;
`

export const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 120px;
  margin-top: 36px;
  padding: 12px 0; 
`

export const HeaderTitle = styled.h1`
  font-size: 42px;
  color: #1B2C3F;
`

export const HeaderSubtitle = styled.p`
  margin-top: 24px;
  font-size: 18px;
  color: #2E4966;
  ul {
    list-style-type: none;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      svg {
        color: #CD97AB;
        width: 50px;
      }
      padding-top: 24px;
    }
  }
`