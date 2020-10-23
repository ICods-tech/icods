import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Rubik';
  display: flex;
  flex: 1;
  height: 100%;
  margin-left: 160px;
  margin-top: 120px;
`

export const QRCodeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const HeaderText = styled.h1`
  font-size: 56px;
  margin-right: 16px;
`

export const HorizontalLine = styled.hr`
  width: 420px;
  border-top: 6px solid black;
  margin-top: 24px;
`

export const QRCodesWrapper = styled.div`
  display: flex;
  margin: 20px;
` 
