import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../redux/actions/productActions'; // Thunk ile veri çekme aksiyonu
import Loading from '../components/Loading'; // Loading componenti
import Card from '../components/Card'; // Card componenti

const MainPage = () => {
  const dispatch = useDispatch();
  
  // Redux store'dan productReducer'ı seçiyoruz
  const { products, isLoading, isError } = useSelector((store) => store.productReducer);

  useEffect(() => {
    // Component ilk renderda çalışacak ve veriyi çekecek
    dispatch(getProductData());
  }, [dispatch]);

  return (
    <div>
      {/* Yükleniyorsa */}
      {isLoading && <Loading />}

      {/* Hata olduysa */}
      {isError && <p>Üzgünüz, veri alınırken bir hata oluştu :(</p>}

      {/* Veriler geldiyse */}
      <div className="d-flex flex-wrap gap-4 p-5 justify-content-center">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>Henüz ürün yok.</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
