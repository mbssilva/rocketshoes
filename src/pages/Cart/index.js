import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import * as cartActions from '../../store/modules/cart/actions';

import { formattedPrice } from '../../utils/format';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount, total }) {
  function handleDeleteProduct(product) {
    removeFromCart(product.id);
  }

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUB-TOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          { cart.map(product => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>

            <td>
              <div>
                <button type="button" onClick={() => decrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button" onClick={() => increment(product)}>
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>{product.subtotal}</strong>
            </td>

            <td>
              <button type="button" onClick={() => {handleDeleteProduct(product)}}>
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
          )) }
        </tbody>
      </ProductTable>

      <footer>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>

        <button type="button">Finalizar pedido</button>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formattedPrice(product.price*product.amount),
  })),
  total: formattedPrice(state.cart.reduce(
    (total, product) => (total + product.price*product.amount), 0)),
});

const mapDispatchToProps = dispatch => bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
