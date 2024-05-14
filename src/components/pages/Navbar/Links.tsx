import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const LinkItems: FC = (): JSX.Element => {
  return (
    <ul>
      <li>
        <NavLink to="/howtobuy">Как покупать</NavLink>
      </li>
      <li>
        <NavLink to="/sales">Распродажи</NavLink>
      </li>
      <li>
        <NavLink to="/prices">Цены</NavLink>
      </li>
      <li>
        <NavLink to="/help">Помощь</NavLink>
      </li>
      <li>
        <NavLink to="/bonuses">Бонусы</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Блог</NavLink>
      </li>
      <li>
        <NavLink to="/shops">Магазины</NavLink>
      </li>
    </ul>
  );
};

export default LinkItems;
