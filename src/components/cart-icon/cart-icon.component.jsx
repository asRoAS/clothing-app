import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.component.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, CartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{CartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
