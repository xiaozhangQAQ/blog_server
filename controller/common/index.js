
const {getQnToken} = require('../../utils/qnToken');

//七牛云token
const qn_token = (req, res) => {
    let token = getQnToken();
    return res.json({ code: 20000,
        data: 
        {token}
    });
}

module.exports = {
    qn_token
}