import React from 'react';
// @ts-ignore
import YouTube from 'react-youtube';

class Example extends React.Component {

  constructor() {
    super()
    this.buttonClicked = this.buttonClicked.bind(this);
    this._onReady1 = this._onReady1.bind(this);
    this._onReady2 = this._onReady2.bind(this);
    this._onPlay = this._onPlay.bind(this);
    this._onStart = this._onStart.bind(this);
  }

  render() {
    const opts = {
      height: '400',
      width: '400',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    const opts2 = {
      height: '400',
      width: '400',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }

    };

    return (
      <div>
        <YouTube
          opts={opts}
          onReady={this._onReady1}
          onStateChange={this._stateChange}
          onPlay={this._onPlay}
        />
        <YouTube
          opts={opts}
          videoId='SSbBvKaM6sk'
          onReady={this._onReady2}
          onPlay={this._onStart}
        />
        <button onClick={this.buttonClicked}>YOOOOOO!</button>
      </div>
    );
  }

  _onPlay() {
    if (!this.started) this.player.seekTo(60);
    this.player.unMute();
    this.player.setVolume(100);
    this.started = true;
  }

  _onReady1(event) {
    this.started = false;
    console.log('ready hit')
    this.player = event.target
    this.player.loadPlaylist(['CQ2rciqO7_Y']);
    this.player.mute()
  }

  _onStart() {
    this.fadeIn(this.player2)
    this.fadeOut(this.player)
  }

  fadeOut(player) {
    for (let v = 100; v >= 0; v--) {
      setTimeout(() => {
        console.log('p1', v)
        player.setVolume(v)
      }, ((100 - v) * 50))
    }
  }

  fadeIn(player) {
    for (let v = 0; v <= 100; v++) {
      setTimeout(() => {
        player.setVolume(v)
        console.log('p2', v)
      }, (v * 50))
    }
  }

  _onReady2(event) {
    this.player2 = event.target
  }

  _stateChange(event) {
    console.log(event)
  }

  buttonClicked() {
    // this.player.cueVideoById('hvRWsKOK9Kw');
    this.player2.playVideo();
    this.player2.unMute();
    this.player2.setVolume(0);
  }

}

export default Example;