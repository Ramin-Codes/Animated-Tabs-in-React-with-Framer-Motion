import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'


const App = () => {
  
  const [selected, setSelected] = useState(0)
  const [items, setItems] = useState(['Home', 'About', 'Contact'])

  return (
    <div id="app">
      <MainContainer>

        {/*------------NavBar--------------*/}
        <nav>
          { 
            items.map((item, index) => {
              return (
                <li key={index} onClick={() => setSelected(index)} >
                  <h3>{ item }</h3>
                    { 
                      index === selected && (<motion.span layoutId="item_underline"></motion.span>) 
                    }
                </li>
              )
            }) 
          }
        </nav>


        {/*------------Section--------------*/}
        <section>
          { items.map((item, index) => {
            return (
              <AnimatePresence exitBeforeEnter>
                <motion.div key={index} data-active={index === selected && 'true'}>
                  <AnimatePresence exitBeforeEnter>
                    {
                      index === selected && ( <motion.h1 initial={{ x: -1000 }} animate={{ x: 0 }} exit={{ x: -1000 }}>{ item }</motion.h1> )
                    }
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>
            )
          })}
        </section>

      </MainContainer>
    </div>
  );
}

export default App;




/*--------------Styled-Components--------------*/
const MainContainer = styled(motion.div) `
  width: 600px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  /*----Navbar----*/
  nav {
    width: 100%;
    display: flex;
    padding: 10px 0;
    li {

      padding: 10px;
      list-style: none;
      cursor: pointer;
      flex: 1;
      h3 {
        text-align: center;
      }
      span {
        width: 100%;
        height: 2px;
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }

  /*----Section----*/
  section {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      opacity: 0;
      transition: opacity 0.5s linear;
      &[data-active='true'] {
        opacity: 1;
      }
    }
  }
`