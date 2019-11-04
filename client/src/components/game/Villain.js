import React, { Component } from 'react'
import './Villain.css'
import Thanos from '../../img/Thanos.png'
import Venom from '../../img/Venom.png'
import Blob from '../../img/blob.png'
import Morgan from '../../img/MorganleFay.png'
import SugarMan from '../../img/SugarMan.png'
import Skadi from '../../img/Skadi.png'
import Nitro from '../../img/Nitro.png'
import Sutur from '../../img/Sutur.png'
import Nimrod from '../../img/Nimrod.png'
import DrOctopus from '../../img/DrOctopus.png'
import IronClad from '../../img/IronClad.png'

export default class Villain extends Component {
    componentDidMount() {
        const img = document.getElementById('villain')
        let url = ''
        switch (this.props.level){
            case 1 : url = Thanos; break;
            case 2 : url = Venom; break;
            case 3 : url = Blob; break;
            case 4 : url = Morgan; break;
            case 5 : url = SugarMan; break;
            case 6 : url = Skadi; break;
            case 7 : url = Nitro; break;
            case 8 : url = Sutur; break;
            case 9 : url = Nimrod; break;
            case 10 : url = DrOctopus; break;
            case 11 : url = IronClad; break;
            default: url = Thanos; break; 
            
        }
        img.style.backgroundImage = `url(${url})`
    }
    componentDidUpdate() {
        const img = document.getElementById('villain')
        let url = ''
        switch (this.props.level){
            case 1 : url = Thanos; break;
            case 2 : url = Venom; break;
            case 3 : url = Blob; break;
            case 4 : url = Morgan; break;
            case 5 : url = SugarMan; break;
            case 6 : url = Skadi; break;
            case 7 : url = Nitro; break;
            case 8 : url = Sutur; break;
            case 9 : url = Nimrod; break;
            case 10 : url = DrOctopus; break;
            case 11 : url = IronClad; break;
            default: url = Thanos; break; 
            
        }
        img.style.backgroundImage = `url(${url})`
    }
    render() {
        
        return (
            <div id="villain" className="villain">
                
            </div>
        )
    }
}
