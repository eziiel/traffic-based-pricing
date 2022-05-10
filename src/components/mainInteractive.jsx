
import React from "react"
import style from "./main.module.css"
import iconList from "../imagens/icon-check.svg"

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
const itens = [8,12,16,24,36]
const MainInt = () => {
  const [value, setValue] = React.useState(0)
  const [valueM, setValueM] = React.useState(0)
  const [pages, setPages] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const [toggle, setToggle] = React.useState(0)
  const [progressToggle, setPT] = React.useState(0)

  function handleChange ({target}) {
    setValue(target.value)
  }
  function handleToggle ({target}) {
    setToggle(Number(target.value))
    
      itens.map(item => {
      if(toggle == 0 && valueM === item) {
        setValueM((valueM) => valueM - (valueM * .25))
      }
      else if (toggle == 1 && valueM != item){
        setValueM(valueM)
      }
    })
  }

  React.useEffect(()=>{
    setPT((progressToggle) => toggle * 25)
  },[toggle])



  React.useEffect(()=>{
    setProgress((progress) => (value * 20))

    switch (Number(value)) {
      case 0: 
        setValueM((valueM) => valueM = 0)
        setPages(0)
        break
      case 1: 
        setValueM((valueM) => valueM = 8)
        setPages("10K")
      break
      case 2: 
        setValueM((valueM) => valueM =12)
        setPages("50K")
      break
      case 3: 
        setValueM((valueM) => valueM =16)
        setPages("100K")
      break
      case 4: 
        setValueM((valueM) => valueM =24)
        setPages("500K")
      break
      case 5: 
        setValueM((valueM) => valueM =36)
        setPages('1M')
      break
   }
  },[value])

return (
  <main className={`${style.mainContent} container`}>
    <header className ={style.header}>
      <h1 className ={style.title}> Simple, traffic-based pricing</h1>
      <p>Sing-up for our 30-day trial. No credit car required</p>
    </header>
  
    <section className={style.content}>
      <div className= {style.headContent}>
        <p className={style.info}>{pages} PAGESVIEWS</p>
        <span className={style.priceContent}>
          <span className={style.price}>
            R$ {valueM}
          </span>
          <span className={style.infoPrice}>
            /month
          </span>
        </span>
      </div>

      <section >
      <div className={style.contentRange}>
        <span
        className={`${style.progress}`}
        style ={{width : `${progress}%`}}
        ></span>
      <input 
        className={style.input}
        type="range" 
        name="pricePage" 
        id="pricePage" 
        min={0}
        max ={5}
        value ={value}
        onChange ={handleChange}
        />
      </div>
        <div className={style.disc}>
          <span
            className={style.infoDiscTime}
          >Monthly Billing</span>
            <div 
              className={style.inputToggle}>
              <span
              className={style.toggle}         
              style ={{width : `${progressToggle}px`}}
              >
              </span>
              <input 
              className={style.inputDisc}
              type="range" 
              onChange={handleToggle}
              value={toggle}
              min={0}
              max={1}
              />
            </div>
          <span className={style.infoDiscTime}>
            Year Billing</span>
          <span className={style.infoDisc}>
            25% discount
          </span>
        </div>
      </section>

      <div className ={style.footerBar}>
        <ul className ={style.listVantage}>
          <li 
          className ={style.item}>
            <img src={iconList} alt="iconChecked" />
            <span>Unlimited websites.</span>
          </li>
          <li
          className ={style.item}>
            <img src={iconList} alt="iconChecked" />
            <span>100% data ownership.</span>
          </li>
          <li
          className ={style.item}>
            <img src={iconList} alt="iconChecked" />
            <span>E-mail reports.</span>
          </li>
        </ul>
        <button className={style.btnSend}>
          Start my Trial
        </button>
      </div>

    </section>
  </main>
)  
}

export { MainInt }