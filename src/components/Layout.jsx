import Header from "./Header"

const Layout = ({children}) => {
  return (
    <div className="bg-black">
      <Header/>
      {children}
    </div>
  )
}

export default Layout