// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossCount: 0,
    headsCount: 0,
    tailsCount: 0,
    isTrue: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossCoin = () => {
    const {tossCount, headsCount, tailsCount, isTrue} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(obj => ({
        tossCount: obj.tossCount + 1,
        headsCount: obj.headsCount + 1,
        isTrue: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(obj => ({
        tossCount: obj.tossCount + 1,
        tailsCount: obj.tailsCount + 1,
        isTrue: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {tossCount, headsCount, tailsCount, isTrue} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={isTrue} alt="toss result" className="image" />
          <br />
          <button className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total: {tossCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
