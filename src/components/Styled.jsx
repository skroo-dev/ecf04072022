import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  max-width: 100vw;
  margin-top: 200px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 2px 15px grey;
  &:hover {
    box-shadow: 3px 4px 20px grey;
  }
`

export const FormInput = styled.input`
  border-radius: 5px;
  margin: 10px;
  background: transparent;
  border: 1px solid white;
  box-shadow: 1px 1px 1px grey;
  color: black;
  &:hover {
    box-shadow: 2px 2px 5px;
  }
`
export const Formbtn = styled.input`
  border-radius: 5px;
  margin: 10px;
  color: black;
  background: white;
  border: 1px solid white;
  box-shadow: 2px 2px 2px 1px grey;
  transform: scale(0.8);
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`
export const Btn = styled.button`
  border-radius: 5px;
  margin: 10px;
  color: black;
  background: white;
  border: 1px solid white;
  box-shadow: 2px 2px 2px 1px grey;
  transform: scale(0.8);
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`

export const InfoPass = styled.p`
  color: black;
  text-shadow: 1px 1px 10px;
  position: relative;
  top: 350px;
  font-size: small;
`

export const Header = styled.h1`
  color: black;
  height: 70px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: 2px 2px 20px 1px grey;
  margin: 0 auto;
  font-weight: 100;
  letter-spacing: 15px;
`

export const TextContent = styled.p`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: medium;
  letter-spacing: 2px;
`
export const ListTitle = styled.h2`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-size: large;
  letter-spacing: 2px;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 2px 15px grey;

  background: linear-gradient(
    17deg,
    #c5cdb5,
    #d2d2d2,
    #a9b4ab,
    #9895f6,
    #5a56dd
  );
  background-size: 1000% 1000%;
  animation: GradientBackground 9s ease infinite;

  @keyframes GradientBackground {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    box-shadow: 3px 4px 20px grey;
  }
`

export const ListPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const UserName = styled.h1`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-size: large;
  letter-spacing: 3px;
`

export const AddList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 20px;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 1px 2px 15px grey;
  &:hover {
    box-shadow: 3px 4px 20px grey;
  }
`
