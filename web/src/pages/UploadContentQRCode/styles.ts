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

export const UploadButtons = styled.p`
  font-family: 'Rubik';
  width: 300px;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 0.8rem;
  color:  #F1F5FA;
  background-color: #15212F;
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
    transform: translateY(-1px);
  }
`

export const RecordButtons = styled.button`
  font-family: 'Rubik';
  width: 300px;
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
    transform: translateY(-1px);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 160px;
  align-items: flex-start;
  justify-content: center;
`

export const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  align-items: center;
  justify-content: center;
` 

export const ImagePreview = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 8px;

  :nth-child(0) {
    margin-right: 0;
  }
`