export const getCartHome = (req, res) => {
  res.render('pages/cart', {
    pageTitle: '장바구니'
  });
}