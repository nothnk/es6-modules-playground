class Message {
    constructor(props = null) {
        console.log(props);
        console.log(props.msg);
        this.props = {};
        this.props.msg = props.msg;
        this.createHtml();
    }

    createHtml() {
        this.msgHtml = `<span>${this.props.msg.text}</span>`;
    }

    getMessage() {
        return this.msgHtml;
    }

}

export default Message;