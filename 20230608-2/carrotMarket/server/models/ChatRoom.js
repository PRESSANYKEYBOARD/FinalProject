// Mongoose 라이브러리를 사용하여 MongoDB 사용
const mongoose = require('mongoose');

// chatRoom 스키마를 생성 및 구조 정의
const chatRoomSchema = new mongoose.Schema({
    
    //  각 채팅방은 고유한 id를 가짐
    id: mongoose.Types.ObjectId,

    // buyer, seller 각각 고유한 objectId 값을 가짐, User.js 정보를 참조함.
    buyer: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    seller: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    // 대화 내용을 배열 형태로 저장함 / 각 메세지 보낸 사람의 ID는 User 참조.
    conversation: [{
        senderId: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        message: {
            type: String,
            trim: true
        }
    }]
})

// chatRoomSchema를 기반으로 ChatRoom 모델을 생성 후 export
module.exports = mongoose.model('ChatRoom', chatRoomSchema);