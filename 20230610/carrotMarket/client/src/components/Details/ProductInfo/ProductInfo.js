import { useState, useEffect } from 'react';
import { Row, Tabs, Tab, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { wishProduct } from '../../../services/productData';

function ProductInfo({ params }) {
  const [wish, setWish] = useState(false);

  useEffect(() => {
    setWish(params.isWished === true);
  }, [params.isWished]);

  const onHeartClick = () => {
    const toggleWish = !wish;
    wishProduct(params._id)
      .then(res => {
        setWish(toggleWish);
      })
      .catch(err => console.log(err));
  };

  //{params.title}: 상품 제목
  //{params.addedAt}: 업로드 날짜
  //{params.description}: 상품 설명

  return (
    <div className="d-flex flex-column align-items-center">
        <section id='images'>
            <Image className="col-lg-12" src={params.image} rounded />
        </section>

        <section id="profile">
            <a id="profile_link" href=''>
                <div id="space-between">
                    <div style={{ display: 'flex' }}>
                        <div id='profile_image'>
                            <img id="avatar" src={params.avatar} alt="user-avatar" />
                        </div>
                        <div id="profile_left">
                            <div id="nickname">{params.name}</div>
                            <div id="profile_address">안산시 단원구 선부동</div>
                        </div>
                    </div>

                    <div id="profile_right">
                        <dl id="manner_temper">
                            <dt>매너온도</dt>
                            <dd className="text-color">75<span>°C</span></dd>
                        </dl>
                        <div className="meters">
                            <div id="bar" className="bar-color-06" style={{ width: '75%' }}></div>
                            <div id="face" className="face-06"></div>
                        </div>
                    </div>
                </div>
            </a>
        </section>

        <section id="content">
            <h1 id="content_title">{params.title}</h1>
            <p id="content_category">
                <time> 몇 시간 전~ </time>
            </p>
          <p id="content_price">가격이 들어갈 차례</p>
          {params.isAuth && (
            <span
              id="heartIconDetails"
              className="col-lg-1 col-sm-1"
              onClick={onHeartClick}
            >
              {!wish ? (
                <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                  <BsHeart />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger placement="top" overlay={<Tooltip>Remove from Wishlist</Tooltip>}>
                  <BsHeartFill />
                </OverlayTrigger>
              )}
              {params.description}
            </span>
          )}
        </section>
    </div>
  );
}

export default ProductInfo;