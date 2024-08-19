export type HeaderProps = {
    showMenu: ShowMenu
    setShowMenu: SetShowMenu
  }
  
export type ShowMenu = boolean

export type SetShowMenu = React.Dispatch<React.SetStateAction<boolean>>

export type DemoTable = {
  id: number,
  name: string,
  fave_warlord: string
}

export type SignUpData = {
  email: string,
  username: string,
  password:string
}