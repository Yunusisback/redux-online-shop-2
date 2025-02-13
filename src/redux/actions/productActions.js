import axios from 'axios';
import { ActionTypes } from '../actionTypes';

// Aksiyon oluşturan fonksiyonlar
export const setLoading = () => {
  return {
    type: ActionTypes.SET_LOADING,
  };
};

export const setError = () => {
  return {
    type: ActionTypes.SET_ERROR,
  };
};

export const setProducts = (payload) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload,
  };
};

// Asenkron Thunk Aksiyonu - Ürün verilerini API'den al
export const getProductData = () => (dispatch) => {
  dispatch(setLoading()); // Yükleniyor durumunu başlat
  axios
    .get('http://localhost:4000/products') // API'den ürün verilerini al
    .then((res) => {
      // Başarılı olursa veriyi store'a gönder
      dispatch(setProducts(res.data));
    })
    .catch((err) => {
      // Hata olursa hata durumunu set et
      dispatch(setError());
    });
};
