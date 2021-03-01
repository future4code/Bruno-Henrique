import React, { useContext } from 'react'
import { Header } from '../../components/header/Header'
import { useProtectedPage } from '../../hooks/useProtectedPage'

import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from 'react-router-dom'


import Grid from '@material-ui/core/Grid'
import { PostCard } from '../../components/card/PostCard'

export default function FeedPage() {
    useProtectedPage()
    const history = useHistory()
    // const { states, setters } = useContext(GlobalStateContext)

    const posts = [
        {
            "userVoteDirection": 0,
            "id": "0YgsvY76Ud6Enqm96H4O",
            "votesCount": 12,
            "text": "pro peer review hehe",
            "createdAt": 1608151022525,
            "username": "testezinho",
            "commentsCount": 16,
            "title": "teste"
        },
        {
            "userVoteDirection": 0,
            "id": "0gPRkfvhMWbtY6o7cOvM",
            "votesCount": 2,
            "username": "diego",
            "commentsCount": 11,
            "title": "WhatsApp revela o que acontecerá com usuários que não aceitarem novos termos de uso",
            "text": "Segundo a página de perguntas frequentes do aplicativo, quem não aceitar compartilhar informações com o Facebook não poderá usar alguns recursos do aplicativo após o dia 15 de maio. Por um curto período, os usuários ainda poderão receber chamadas e notificações, mas não poderão ler nem enviar mensagens pelo app. As novas regras alertam também para a aplicação da política relacionada a usuários inativos para quem não aceitar a atualização, apagando contas após 120 dias de inatividade.",
            "createdAt": 1614118662682
        },
        {
            "userVoteDirection": 0,
            "id": "0pXHIM8lxROHNH3BqdcR",
            "createdAt": 1614290568863,
            "votesCount": 0,
            "commentsCount": 0,
            "username": "Vivis",
            "text": "a",
            "title": "a"
        },
        {
            "userVoteDirection": 0,
            "id": "0rfz03E6rOkiSclrFUHt",
            "text": "De acordo com o Ministério Público Federal (MPF), as ordens judiciais visam apreender mais de 100 obras de arte dos investigados. As obras serão levadas para Curitiba para uma perícia da polícia.\n\nEm São Luís, no Maranhão, foram apreendidos carros de luxo e um helicóptero.\n\n",
            "username": "afmdaniel",
            "votesCount": 10,
            "commentsCount": 3,
            "title": "Obras de arte, carros de luxo e helicóptero são apreendidos em fase da Lava Jato que investiga propina na Transpetro e lavagem de dinheiro",
            "createdAt": 1610463335534
        },
        {
            "userVoteDirection": 0,
            "id": "266GD2ypHedUdFcxJuvD",
            "createdAt": 1610463368641,
            "title": "Peixe-boi tem a palavra 'Trump' escrita em seu corpo na Flórida",
            "text": "Espécie é protegida por leis estaduais e federais nos EUA, e investigação foi aberta pelo Serviço de Pesca e Vida Selvagem do país.\n",
            "votesCount": 5,
            "commentsCount": 2,
            "username": "avemaria"
        }
    ]

    const list = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                id={post.id}
                username={post.username}
                title={post.title}
                text={post.text}
                votesCount={post.votesCount}
                commentsCount={post.commentsCount}
                history={history}
            />
        )
    })

    return (
        <>
            <Header />
            <Grid container>
                <Grid item xs={12} align="center">
                    <Grid item xs={10} sm={6} md={4}>
                        {list}
                    </Grid>
                </Grid>

            </Grid>

        </>

    )
}