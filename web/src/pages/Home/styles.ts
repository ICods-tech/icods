import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const SessionsImage = styled.img`
  width: 530px;
  height: 350px;
  margin-left: 256px;
`

export const SessionsInformation = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SignSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.img`
  margin-bottom: 64px;
`

export const SignButtons = styled.button`
  font-family: 'Rubik';
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 0.8rem;
  color:  #15212F;
  background-color: #F1F5FA;
  border: 2px solid #15212F;
  border-radius: 100px;
  padding: 1rem 2.5rem;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;

  :hover {
    background-color: #15212F;
    color: #F1F5FA;
    transform: translateY(-3px);
  }
`

export const Input = styled.input`
  margin-bottom: 16px;
  height: 32px;
  border-radius: 4px;
  padding: 8px;
  border: 2px solid black;
  :nth-child(3) {
    margin-bottom: 36px;
  }
`