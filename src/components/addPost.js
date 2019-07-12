import React, { Component } from 'react';

class AddPost extends Component {
    state = {
        title: "",
        author_id: "",
        content: ""
    };

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleContentChange = e => {
        this.setState({
            content: e.target.value
        });
    };

    handleSubmit = async () => {
        const url = "http://localhost:3000/v1/all";
        const formData = this.state;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
    };

    render() {
        return(
            <>
                <h2>Add a Blog Post</h2>
                <span>Title</span>
                <span>
                    <input
                        onChange={this.handleTitleChange}
                        value={this.state.title}
                        type="text"
                    />
                </span>
                <span>Content:</span>
                <span>
                    <input
                        onChange={this.handleContentChange}
                        value={this.state.content}
                        type="text"
                    />
                </span>
                <button onClick={this.handleSubmit}>Submit</button>
            </>
        )
    }
}

export default AddPost;