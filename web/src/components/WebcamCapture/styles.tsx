import styled  from 'styled-components'

export const WebcamWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;
    background: #15212F;
    border: 8px solid #15212F;
    border-bottom: 0;
    border-radius: 4px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
`

export const Button = styled.a `
  font-family: 'Rubik';
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 0.8rem;
  color:  #364A61;
  background-color: #F1F5FA;
  outline: none;
  
  padding: 1rem 2.5rem;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  cursor: pointer;

  :hover {
    color: #4A6685;
  }
`