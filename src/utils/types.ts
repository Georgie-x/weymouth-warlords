export type HeaderProps = {
    showMenu: ShowMenu
    setShowMenu: SetShowMenu
  }
  
export type ShowMenu = boolean

export type SetShowMenu = React.Dispatch<React.SetStateAction<boolean>>