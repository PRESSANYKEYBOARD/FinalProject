import React from 'react';
import { useState } from 'react';
import ActiveSells from './Sells/ActiveSells'
import { Col, Row, Button, Form, Modal } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'
import { FaSellsy } from 'react-icons/fa'
import { RiMessage3Fill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa'; // Import a different icon from react-icons library
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


// import { createChatRoom } from '../../services/messagesData'

function SellerProfile({ params, history }) {
    //메시지 보여줌... 기본값은 false로
    const [showMsg, setShowMdg] = useState(false);
    //메시지 내용는 공백으로
    const [message, setMessage] = useState("");
    const handleClose = () => setShowMdg(false);
    const handleShow = () => setShowMdg(true);

    const handleMsgChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value)
    }

    // const onMsgSent = (e) => {
    //     e.preventDefault();
    //     createChatRoom(params._id, message)
    //         .then((res) => {
    //             history.push(`/messages`)
    //         })
    //         .catch(err => console.log(err))
    // }

    const getMannerTemperatureStyle = (temperature) => {
        const width = temperature + "%";
        return {
            width: width,
            backgroundColor: getBackgroundColor(temperature)
        };
    };

    const getBackgroundColor = (temperature) => {
        // 여기에서 매너온도에 따른 배경색을 결정하는 로직을 작성하면 됩니다.
        // 예시로 몇 가지 범위에 따른 배경색을 지정합니다.
        if (temperature >= 0 && temperature < 21) {
            return "black";
        } else if (temperature >= 21 && temperature < 36.5) {
            return "darkblue";
        } else if (temperature >= 36.5 && temperature < 40) {
            return "royalblue";
        } else if (temperature >= 40 && temperature < 50) {
            return "green";
        } else if (temperature >= 50 && temperature < 60) {
            return "#f9bc28";
        } else {
            return "#ff6f31";
        }
    };

    const getMannerTemperatureImage = (temperature) => {
        if (temperature >= 0 && temperature < 21) {
            return "https://kr.object.ncloudstorage.com/ncp3/ncp3/2.png";
        } else if (temperature >= 21 && temperature < 36.5) {
            return "https://kr.object.ncloudstorage.com/ncp3/ncp3/3.png";
        } else if (temperature >= 36.5 && temperature < 40) {
            return "https://kr.object.ncloudstorage.com/ncp3/ncp3/4.png";
        } else if (temperature >= 40 && temperature < 50) {
            return "https://kr.object.ncloudstorage.com/ncp3/ncp3/5.png";
        } else if (temperature >= 50 && temperature < 60) {
            return "https://kr.object.ncloudstorage.com/ncp3/ncp3/5.png";
        } else {
            return null;
        }
    };

    const getFontColor = (temperature) => {
        if (temperature >= 0 && temperature < 21) {
          return "black";
        } else if (temperature >= 21 && temperature < 36.5) {
          return "darkblue";
        } else if (temperature >= 36.5 && temperature < 40) {
          return "royalblue";
        } else if (temperature >= 40 && temperature < 50) {
          return "green";
        } else if (temperature >= 50 && temperature < 60) {
          return "#f9bc28";
        } else {
          return "#ff6f31";
        }
      };

    return (
        <>
        <div id="profile-head">
            <div className="container">
                <Row className="profile-row">
                    <Col id="profile_avatar" lg={2} md={5} sm={12}>
                        <img id="avatar" alt="avatar" src={params.avatar} />
                    </Col>
                    <Col id="profile_information1" lg={3} md={3} sm={12}>
                        <div id="profile_information2">
                        <div id="profile_name" style={{ display: 'flex' }}>
                            <p>
                                <span style={{ fontWeight: "bold" }}><BsFillPersonFill /> {params.name}</span>
                            </p>
                            </div>
                            <div id="profile_button">
                                <span id="edit-icon">
                                    <Link to="">
                                        <button className="manner-button">매너 칭찬하기</button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col id="profile_information3" lg={3} md={3} sm={12}>
                        <div className='sellcount'>
                            <FaShoppingCart className="section-icon" />
                            <p className="section-title">판매상품 <span className="item-count">{params.totalSells}</span>개</p>
                        </div>
                        <div id="tem_total">
                            <p id="tem_total_txt">매너온도</p>
                            <div className='meters'>
                                <p id="tem_total_cnt" style={{ marginBottom: "-1px", float: "right", color: getFontColor(36.5) }}>
                                    {36.5}°C
                                </p>
                            </div>
                            <div className="manner-thermometer" style={{ width: "100%" }}>
                                <div className="manner-thermometer-fill" style={getMannerTemperatureStyle(36.5)}></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

            <div className="container">
                {/* <Row>
                    <Col lg={12}>
                        <ActiveSells params={params} />
                    </Col>
                </Row> */}
            </div>


            <Modal show={showMsg} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" name="textarea" onChange={handleMsgChange} rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="dark" onClick={onMsgSent}>Sent</Button> */}
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SellerProfile;