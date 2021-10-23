import * as React from 'react'
import styles from './_styles.css';
import {Button, Block} from "sezy-design";
import Menu from "./menu";
import Icon from 'sezy-design/components/icon';
// import * as Logo from "~commons/logo";

const useNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // if(width < 768)
  //   return 
  const NavigationMobile = (
    <Block 
      classes={`${styles['navigation']}${isOpen ? ' active' : ''}`}
      {...{
        onClick: ((e)=> {
          if(e.target === e.currentTarget && isOpen)
            setIsOpen(false);
        }).bind(this),
      }}
    >
      <Block>
        {/* <Logo.Element {...logoProps} /> */}
        <Menu/>
        <Button onClick={ handleLogoutClick} />
      </Block>
    </Block >
  );
  const NavigationMobileToggle = (
      <Icon 
        name='bars'
        size='l1'
        onClick={ (e)=> {
          if(!isOpen)
            setIsOpen(true);
        }}
      /> 
  );

  const NavigationDesktop = (
    <Block classes={`${styles['navigation']}`}>
      {/* <Logo.Element {...logoProps} /> */}
      <Menu/>
      <Button onClick={ handleLogoutClick} />
    </Block >
  )

  return {NavigationDesktop, NavigationMobile, NavigationMobileToggle};
}

const handleLogoutClick = () => {
  window.location.href = '/login'; 
  // new Promise(function (resolve, reject) {
  //   document.cookie = `accessToken=;`;
  //   resolve(document.cookie);
  // }).then(() => { window.location.href = '/login'; });
}

export default useNavigation
export {
  useNavigation
}