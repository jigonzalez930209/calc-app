import { useState } from 'react'
import GlobalStyle1 from './Styles/theme1'
import GlobalStyle2 from './Styles/theme2'
import GlobalStyle3 from './Styles/theme3'

import {
  Button,
  ButtonContainer,
  Container,
  Header,
  Input,
  Switch,
  Switcher,
  SwitcherContainer,
  WrapperSwitch,
} from './App.style'

import buttons from './utils/buttons'

function App() {
  const [value, setValue] = useState('')
  const [theme, setTheme] = useState(1)
  const [themeValue, setThemeValue] = useState('8%')

  const handleTheme = () => {
    if (theme === 1) {
      setTheme(2)
      setThemeValue('38%')
    } else if (theme === 2) {
      setTheme(3)
      setThemeValue('70%')
    } else {
      setTheme(1)
      setThemeValue('8%')
    }
  }

  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== ' ') {
      setValue(eval(value).toString())
    }
  }

  const deleteValue = () => {
    if (value.slice(-1) === ' ') {
      setValue(value.substring(0, value.length - 3))
    } else if (value.slice(-2) === '0.') {
      setValue(value.substring(0, value.length - 2))
    } else {
      setValue(value.substring(0, value.length - 1))
    }
  }

  // const addSymbol = (symbol: string) => {
  //   // Ojo con la ortografía
  //   if (value.slice(-1) !== ' ' && value.slice(-1) !== '.') {
  //     setValue(value + symbol)
  //   }
  // }

  const handleChangeSetValue = (val = '') => {
    const operations = ['.', ' - ', ' + ', ' / ', ' * ', 'DEL', '=', 'RES']
    // OJO Tratar de no utilizar magics strings eso esta mal visto, ejemplo ('RES') esta mal deberia de estar dentro de una
    // constante global o en un symbol para que no se pueda cambiar al berrete
    const isOperation = operations.includes(val)
    console.log({ val, isOperation })
    if (value.length >= 1 && isOperation) {
      if (val === 'DEL') deleteValue()
      else if (val === '=') calc()
      else if (val === 'RES') setValue('')
      else
        setValue((prev) =>
          prev.slice(-1) !== ' ' && prev.slice(-1) !== '.'
            ? `${prev}${val}`
            : prev
        ) // aqui se hace addSymbol function
    } else if (!isOperation) setValue((prv) => `${prv}${val}`)
  }

  return (
    <>
      {theme === 1 && <GlobalStyle1 />}
      {theme === 2 && <GlobalStyle2 />}
      {theme === 3 && <GlobalStyle3 />}
      <Container>
        <Header>
          Calc
          <WrapperSwitch>
            theme
            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>

              <SwitcherContainer onClick={handleTheme}>
                <Switcher theme={themeValue} />
              </SwitcherContainer>
            </Switch>
          </WrapperSwitch>
        </Header>

        <Input>{value}</Input>

        <ButtonContainer>
          {/* Esto pudiera separarse en un component diferente que haga la pincha
          de los botones, te puedes fijar que es un patrón que se repite por lo tanto lo que se puede hacer es 
          crear un array con todos los valores y hacer un array.map((element)=> <Button onClick={() => setValue(value + element)}>{element}</Button>)

          en los botones "especiales"(los que hacen alguna operacion) se puede hacer la decicion en setValue algo como 
          if()
          */}
          {buttons.map((element) => (
            <Button
              key={element.label}
              onClick={() => handleChangeSetValue(element.value)}
              {...element?.styles}
            >
              {element.label}
            </Button>
          ))}
          {/* <Button onClick={() => setValue(value + '7')}>7</Button>
          <Button onClick={() => setValue(value + '8')}>8</Button>
          <Button onClick={() => setValue(value + '9')}>9</Button>
          <Button
            onClick={() => value.length >= 1 && deleteValue()}
            color="var(--white)"
            bg="var(--key-background-dark-blue)"
            bdBox="var(--key-shadow-dark-blue)"
          >
            DEL
          </Button>
          <Button onClick={() => setValue(value + '4')}>4</Button>
          <Button onClick={() => setValue(value + '5')}>5</Button>
          <Button onClick={() => setValue(value + '6')}>6</Button>
          <Button onClick={() => value.length >= 1 && addSymbol(' + ')}>
            +
          </Button>
          <Button onClick={() => setValue(value + '1')}>1</Button>
          <Button onClick={() => setValue(value + '2')}>2</Button>
          <Button onClick={() => setValue(value + '3')}>3</Button>
          <Button onClick={() => value.length >= 1 && addSymbol(' - ')}>
            -
          </Button>
          <Button onClick={() => value.length >= 1 && addSymbol('.')}>.</Button>
          <Button onClick={() => setValue(value + '0')}>0</Button>
          <Button onClick={() => value.length >= 1 && addSymbol(' / ')}>
            /
          </Button>
          <Button onClick={() => value.length >= 1 && addSymbol(' * ')}>
            x
          </Button>
          <Button
            gc="1/3"
            color="var(--white)"
            bg="var(--key-background-dark-blue)"
            bdBox="var(--key-shadow-dark-blue)"
            onClick={() => setValue('')}
          >
            RESET
          </Button>
          <Button
            gc="3/5"
            color={'var(--white)'}
            bg="var(--key-background-red)"
            bdBox="var(--key-shadow-dark-red)"
            onClick={calc}
          >
            =
          </Button> */}
        </ButtonContainer>
      </Container>
    </>
  )
}

export default App
