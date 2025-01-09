import logo from '/star-wars-logo.svg'

const Header = () => {
  return (
    <div className="flex items-center justify-center py-8 border-b border-primary bg-black">
      <img src={logo} alt="Star Wars logo" width={100} />
    </div>
  )
}

export default Header
