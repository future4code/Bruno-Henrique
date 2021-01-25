import React, { useState } from 'react';

const SecaoNovaPostagem = (props) => {
    const [postsList, setPostsList] = useState([]);
    const [post, setPost] = useState({})
    const [inputUserName, setInputUserName] = useState('')
    const [inputUserAvatar, setInputUserAvatar] = useState('')
    const [inputLink, setInputLink] = useState('')


    const handleInputUserName = (e) => {
        setInputUserName(e.target.value)
    }

    const handleInputUserAvatar = (e) => {
        setInputUserAvatar(e.target.value)
    }

    const handleInputLink = (e) => {
        setInputLink(e.target.value)
    }

    const handleBtnPost = () => {
        const newPostsList = [...postsList];

        setPost({
            Name: inputUserName,
            Avatar: inputUserAvatar,
            Picture: inputLink
        })
        console.log(post)
    }    

    return (
        <div>
            <input
                placeholder={"Nome de usuário"}
                value={inputUserName}
                onChange={handleInputUserName}

            />
            <input
                placeholder={"Imagem do avatar"}
                value={inputUserAvatar}
                onChange={handleInputUserAvatar}

            />
            <input
                placeholder={"Link da imagem"}
                value={inputLink}
                onChange={handleInputLink}

            />
            <button onClick={handleBtnPost}>Postar</button>
        </div>
    )
}

export default SecaoNovaPostagem;
