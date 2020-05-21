import React, {Component} from 'react'
import * as store from './../styles/style'
import Menu from './../../components/menu/index'
import Footer from './../../components/footer/footer'
import Input from './../../components/inputs/index'
import Card from './../../store-pokemon/card-pokemon/card-pokemon'
import Carrinho from './../../store-pokemon/carrinho-pokemon/carrinho'

interface StateProps{
    fieldSerch: string
}

export default class Fire extends Component<StateProps>{
    
    state = {
        fieldSerch:''
    }
    
    serch = (name:string) => {
        return (x:any) => x.name.toLowerCase().includes(name.toLowerCase()) || !name
    }

    
   
    render(){
        const { fieldSerch } = this.state
        console.log(this.serch("nathan"))
        return(
            <store.Container>
                <store.Header>
                    <Menu color= "#ff4040" />
                </store.Header>
                <store.ContentSerchBar>
                    <Input 
                        color= "#ff4040" 
                        placeholder="Pesquisar..."
                        value={fieldSerch} 
                        onChange={(event) => this.setState({ fieldSerch: (event.target as HTMLInputElement).value })}/>
                </store.ContentSerchBar>
                <store.Main>
                    <Card 
                        color= "#ff4040"
                        fieldSerch={this.serch(fieldSerch)}
                        />
                </store.Main>
                <store.SideBar>
                    <Carrinho />
                </store.SideBar>
                <store.Footer>
                    <Footer color= "#ff4040" />
                </store.Footer>
            </store.Container>
        )
    }
}