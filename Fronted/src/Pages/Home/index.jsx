import React from 'react'
import { Col, Row } from 'antd';
import { Card } from 'antd';
import './index.scss'
const { Meta } = Card;

const Home = () => {
    return (
        <div id='Home-Page'>
            <div className="Home-Page">
                <div className="container">
                    <div className="sec1">
                        <h2>Awesome</h2>
                        <div className="card">
                            <Row
                                gutter={{
                                    xs: 8,
                                    sm: 16,
                                    md: 24,
                                    lg: 32,
                                }}
                            >
                                <Col className="gutter-row" span={6}>
                                    <div><Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card></div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div ><Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card></div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div><Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card></div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div><Card
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card></div>
                                </Col>
                            </Row>
                            <div className="card2">
                                <Row
                                    gutter={{
                                        xs: 8,
                                        sm: 16,
                                        md: 24,
                                        lg: 32,
                                    }}
                                >
                                    <Col className="gutter-row" span={6}>
                                        <div><Card
                                            hoverable
                                            style={{
                                                width: 240,
                                            }}
                                            cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card></div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div ><Card
                                            hoverable
                                            style={{
                                                width: 240,
                                            }}
                                            cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card></div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div><Card
                                            hoverable
                                            style={{
                                                width: 240,
                                            }}
                                            cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card></div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div><Card
                                            hoverable
                                            style={{
                                                width: 240,
                                            }}
                                            cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" />}
                                        >
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Card></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </div>
                    <section className='sec2'>
<h2>Best Sellers </h2>
<Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_6.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/product/product_7.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card></div>
      </Col>
    </Row>
                    </section>
<section className='sec4'>
<div className="title">
<p>JOIN OUR NEWSLETTER</p>
</div>
<div className="paragraf">
<h1>Subscribe to get Updated with new offers</h1>
</div>
<div className="btn-inp">
<input type="text" placeholder='Enter Email Address'/>
<button type='Sumbit'>Submit</button>
</div>
</section>
<section className='sec5'>

<Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
    </Row>
<div className="cardp-2">
<Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div><Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" />}
  >
    <Meta title="" description="" />
  </Card></div>
      </Col>
    </Row>
</div>
</section>


                </div>
            </div>
        </div>
    )
}

export default Home