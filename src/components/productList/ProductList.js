import './productList.css'
import Product from '../product/Product';
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>projects</h1>
        <p className='pl-desc'>
          these are some of the projects that i've worked on during my time with nucamp. to see the full list of projects i've worked on please visit my github.
        </p>
      </div>
      <div className='pl-list'>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;