import "./main-container.css"

const MainContainer = ({children}) => { 
  return (
    <section className="container" >
      {children}
    </section>
  )
}

export default MainContainer