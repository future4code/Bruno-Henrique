import React, {Component} from 'react'
import './SecaoCompartilhar.css'

import iconeFacebook from '../../img/facebook.png'
import iconeTwitter from '../../img/twitter.png'
import iconeIntsgram from '../../img/instagram.png'

export class SecaoCompartilhar extends React.Component {
	state = {
        iconfacebook: false,
        icontwitter: false,
        iconinstagram: false
    }
    
    render(){
        return <div className={'share-container'}>
            <img alt={'icone_facebook'} src={iconeFacebook}></img>
            <img alt={'icone_instagram'} src={iconeIntsgram}></img>
            <img alt={'icone_twitter'} src={iconeTwitter}></img>
		</div>

        
    }
}
