import React from "react";
import "./menuActions.css";
import { ReactComponent as HeartIcon } from "../../Assets/Images/heart/Shape.svg";
import { ReactComponent as ShoppingCart } from "../../Assets/Images/shopping-cart/shoppingCart.svg";
import { ReactComponent as User } from "../../Assets/Images/person.svg";

const MenuActions = () => {
  return (
    <div className="menu__actions">
      <div className="menu__actions__items">
        <div className="menu__actions__item hearCount">
          <HeartIcon />
          {1===1 &&<span className="featuredCount">0</span>}
          <div className="menu__actions__item__text">Избранное</div>
        </div>
        <div className="menu__actions__item shoppingCount">
          <ShoppingCart/>
          <span className="productCount">0</span>
          <div className="menu__actions__item__text">Корзина</div>
        </div>
        <div className="menu__actions__item">
          <User />
          <div className="menu__actions__item__text">Tom</div>
        </div>
      </div>
    </div>
  );
};

export default MenuActions;
