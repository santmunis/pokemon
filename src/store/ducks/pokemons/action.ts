import { action } from 'typesafe-actions'
import {PokemonsTypes, Pokemon} from './types'
import api from './../../../services/api'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';


export const loadRequest = (tipo:string) => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
        dispatch({type:PokemonsTypes.LOAD_REQUEST})
        return await api.get(`type/${tipo}/`)
            .then((response:any) => {
                return dispatch(getSprites(response.data))
            })
            .catch(error => {
                dispatch({type:PokemonsTypes.LOAD_FAILURE})
                throw (error)
            })
    }
}

export const getSprites = (action:any) => {
    //console.log(action)
    var response:object[] = []
   return  async (dispatch: ThunkDispatch<{}, {}, AnyAction>):Promise<void> => {
         await Promise.all(action.pokemon.map((pokemon:any) => {
             return new Promise(async (resolve, reject) => {
                 await api.get(pokemon.pokemon.url).then((dadosPokemon)=>{
                    var obj1 = {
                        name: pokemon.pokemon.name,
                        url: dadosPokemon.data.sprites.front_default,
                        preco: parseFloat(Math.random().toFixed(2))
                    }
                    return resolve(response.push(obj1))
                 }
                ).catch(error => {
                    dispatch({type:PokemonsTypes.LOAD_FAILURE})
                    throw (error)
                })
            })
        }))
        
        dispatch(loadSuccess(response))
    }
    
}

export const loadSuccess = (data:any) => {
    return {
        type: PokemonsTypes.LOAD_SUCCCES,
        data
    }
}
