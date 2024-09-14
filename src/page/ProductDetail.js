import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../redux/reducers/productSlice';

const ProductDetail = () => {
  const product = useSelector((state) => state.product.productDetail);
  // url ID 가져오기
  let { id } = useParams();
  const dispatch = useDispatch();
  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
    console.log('product', product);
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="title-detail">{product?.title}</div>
          <div className="price-detail">{product?.price}</div>
          <div className="conscious-choice">
            {product?.choice == true ? 'Conscious Choice' : ''}
          </div>
          <div className="select-box-detail">
            <Form.Select size="sm">
              {product?.size.map((size, index) => (
                <option value={index}>{size}</option>
              ))}
            </Form.Select>
          </div>
          <div className="d-grid gap-2">
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
