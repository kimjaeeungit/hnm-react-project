import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ProductDetail = () => {
  // url ID 가져오기
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
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
