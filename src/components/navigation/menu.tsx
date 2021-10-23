import React, { useState } from 'react'
import Classnames from 'classnames'
import styles from './_styles.css'
import { useLocation } from 'react-router';
import navigationData from '~config/navigation';
import _ from 'lodash';
import { Block, Col, Link } from 'sezy-design';
import { Classes } from 'sezy-design/components/_base';

export enum Type {
  DEFAULT = 'menu',
}
export enum Size {
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
}

interface IProps {
  type?: Type,
  size?: Size,
  roleCodeList?: string[],
};


const Menu = (props: IProps): React.ReactElement => {
  const {
    type = Type.DEFAULT,
    roleCodeList,
  } = props;

  const [choosenPath, setChoosenPath] = useState(null);
  const location = useLocation();
  // const isActive = links ? links?.filter(link => hasActiveChildren(location, link)).length > 0 : false;
  //create props
  const componentProps = {
    className: Classnames(
      styles[type],
      // isActive ? styles['active'] : null,
    ),
  };

  return (
    <Block {...componentProps}>
      {navigationData?.map(mapPropsToLinkElemets(location, props, choosenPath, setChoosenPath))}
    </Block>
  )
}

const mapPropsToLinkElemets = (location, props: IProps, choosenPath, setChoosenPath) => (link, index: number) => {
  const isActive = hasActiveChildren(location, link);
  const isChoosen = choosenPath === link;
  // const [isChoosen, setIsChoosen] = useState(isActive);
  const subProps = link.subs
    ? {
      $caret: {
        className: Classnames(
          styles[props?.size ?? Size.M],
          styles['caret'],
        ),
        fill: 'white',
      }
    }
    : {};

  const onClick = link.subs ? {
    onClick: () => {
      if(choosenPath === link)
        setChoosenPath(null);
      else
        setChoosenPath(link);
    }
  } : {};

  const ItemWrapperProps = {
    key: index,
    classes: Classnames(
      isChoosen ? styles['active'] : null,
    ),
  };

  const linkProps = {
    classes: Classes(
      location.pathname === link.url ? styles['item-active'] : null,
      'flex text-white py-3 px-5 hover:bg-gray-700',
      // link.subs && link.subs.filter(item => item.url === location.pathname).length > 0 ? styles['active'] : null,
    ),
    // color: Base.Color.WHITE,
    // padding: Base.PaddingH.PX_28,
    // $icon: {
    //   name: 'circle',
    //   size: Svg.Size.S2,
    //   width: Base.Width.PER_30,
    // },
    // ...subProps,
    // ...link,
    ...onClick,
    label: link.label,
    href: link.href,
    $icon: {
      fill:'white',
      classes: 'mr-2',
      ...link.$icon,
    },
  };

  if (link.subs) {
    const childrenWrapperProps = {
      className: Classnames(
        styles['menu-item-subs'],
      ),
      style: {
        overflow: 'hidden',
        transition: isChoosen ? 'max-height 0.5s' :  'max-height 0.3s',
        maxHeight: isChoosen ? '500px' : '0px',
      }
    };
    const children = link.subs.filter((item: any) => {
      if (item.accessedRoles)
        for (const accessedRole of item.accessedRoles) {
          if (props.roleCodeList == undefined || props.roleCodeList?.includes(accessedRole))
            return true;
        }
      return false;
    }).map(mapPropsToLinkElemets(location, props, choosenPath, setChoosenPath));
    if (link.subs && _.isEmpty(children)) {
      return <></>
    }

    return (<Col {...ItemWrapperProps}>
      <Link {...linkProps} isExternal={false}/>
      <Col {...childrenWrapperProps}>
        {children}
      </Col>
    </Col>)
  }



  return <Col key={index}><Link {...linkProps} /></Col>
}

const hasActiveChildren = (location, link) => {
  return link.subs && link.subs.filter(item => item.url === location.pathname).length > 0;
}

export default Menu