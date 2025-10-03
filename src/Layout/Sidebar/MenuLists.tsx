/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Badges, LI, SVG, UL } from "../../AbstractElements";
import SvgIcon from "../../CommonElements/SVG/SvgIcon";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { handlePined } from "../../ReduxToolkit/Reducers/LayoutSlice";
import { MenuListType, SidebarItemTypes } from "../../Type/Layout/Sidebar";
import { Href } from "../../utils/Constant";

const MenuLists: React.FC<MenuListType> = ({ menu, setActiveMenu, activeMenu, level, className }) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ? true : "";
  };
  const shouldSetActive = ({ item }: SidebarItemTypes) => {
    var returnValue = false;
    if (item?.path === location.pathname) returnValue = true;
    if (!returnValue && item?.children) {
      item?.children.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };
  const handleClick = (item: string) => {
    const temp = activeMenu;
    temp[level] = item !== temp[level] ? item : "";
    setActiveMenu([...temp]);
  };
  useEffect(() => {
    menu?.forEach((item: any) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);

  return (
    <>
      {menu?.map((item, index) => (
        <LI
          key={index}
          className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  
          ${(item.children ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""} `}
        >
          {level === 0 && <SVG className="pinned-icon" iconId="Pin" onClick={() => dispatch(handlePined(item.title))} />}
          <Link
            className={`${!className ? "sidebar-link sidebar-title" : item.type === "sub" ? "submenu-title" : ""} 
            ${(item.children ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "active" : ""}`}
            to={item.path ? item.path : Href}
            onClick={() => handleClick(item.title)}
          >
            {level === 0 ? <SVG className={`stroke-icon`} iconId={item.icon} /> : level === 1 && <SVG className={`svg-menu`} iconId={"right-3"} />}
            <span>{t(item.title)}</span>
            {item.badge && (
              <Badges pill color="primary">
                {item.badge}
              </Badges>
            )}
            {item.children && (activeMenu[level] === item.title ? <SvgIcon iconId="chevron-right" className="feather" /> : <SvgIcon iconId="chevron-right" className="feather" />)}
          </Link>
          {item.children && (
            <UL
              className={`simple-list ${level !== 0 ? "nav-sub-childmenu submenu-content" : "sidebar-submenu "}`}
              style={{
                display: `${(item.children ? item.children.map((innerItem) => ActiveNavLinkUrl(innerItem.path)).includes(true) : ActiveNavLinkUrl(item.path)) || activeMenu[level] === item.title ? "block" : "none"}`,
              }}
            >
              <MenuLists menu={item.children} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} className="sidebar-submenu" />
            </UL>
          )}
        </LI>
      ))}
    </>
  );
};

export default MenuLists;
