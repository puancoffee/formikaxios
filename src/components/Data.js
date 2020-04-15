import React, {Component} from 'react'
import axios from 'axios'

class Data extends Component {
    constructor(props) {
        super(props)
        this.state = {
            heroes: []
        }
    }
    componentDidMount() {
        const URL = 'http://localhost:8000/heroes'
        axios
            .get(URL)
            .then(res => {
                console.log(res.data);

                const heroes = res.data
                this.setState({heroes})
            })
    }

    render() {
        const showData = this
            .state
            .heroes
            .map(item => <div className='col-4'>
                <div key={item.values.id}
                    className="card"
                    style={{
                    width: '18rem'
                }}>
                    <img src={item.values.imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.values.fullName}</h5>
                        <p className="card-text">{item.values.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>)
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        {showData}
                    </div>
                </div>
            </div>
        )
    }
}
export default Data