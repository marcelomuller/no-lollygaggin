import React from 'react';
import './App.css';

import lines from './components/GuardLines';
import nolollygaggin_a from './assets/audio/nolollygaggin.wav';
import alright_a from './assets/audio/alright.wav';
import arrowintheknee_a from './assets/audio/arrowintheknee.wav';
import banditraid_a from './assets/audio/banditraid.wav';
import bestoffense_a from './assets/audio/bestoffense.wav';
import bighammer_a from './assets/audio/bighammer.wav';
import bitlate_a from './assets/audio/bitlate.wav';
import breakneck_a from './assets/audio/breakneck.wav';
import burglarsandvampires_a from './assets/audio/burglarsandvampires.wav';
import castspells_a from './assets/audio/castspells.wav';
import citizen_a from './assets/audio/citizen.wav';
import crossmeelf_a from './assets/audio/crossmeelf.wav';
import curvedswords_a from './assets/audio/curvedswords.wav';
import cutitoff_a from './assets/audio/cutitoff.wav';
import disrespect_a from './assets/audio/disrespect.wav';
import dragons_a from './assets/audio/dragons.wav';
import eyeonyou_a from './assets/audio/eyeonyou.wav';
import fancymagic_a from './assets/audio/fancymagic.wav';
import favorthebow_a from './assets/audio/favorthebow.wav';
import fine_a from './assets/audio/fine.wav';
import fistsraised_a from './assets/audio/fistsraised.wav';
import furs_a from './assets/audio/furs.wav';
import getaway_a from './assets/audio/getaway.wav';
import gooddog_a from './assets/audio/gooddog.wav';
import gottothinking_a from './assets/audio/gottothinking.wav';
import guardduty_a from './assets/audio/guardduty.wav';
import hailsithis_a from './assets/audio/hailsithis.wav';
import ironsword_a from './assets/audio/ironsword.wav';
import kinsman_a from './assets/audio/kinsman.wav';
import knockdownahouse_a from './assets/audio/knockdownahouse.wav';
import littlecoin_a from './assets/audio/littlecoin.wav';
import lotwarmer_a from './assets/audio/lotwarmer.wav';
import manweapon_a from './assets/audio/manweapon.wav';
import mess_a from './assets/audio/mess.wav';
import mixpotions_a from './assets/audio/mixpotions.wav';
import movealong_a from './assets/audio/movealong.wav';
import notmyproblem_a from './assets/audio/notmyproblem.wav';
import orderjarl_a from './assets/audio/orderjarl.wav';
import putthatdown_a from './assets/audio/putthatdown.wav';
import safetravels_a from './assets/audio/safetravels.wav';
import smarter_a from './assets/audio/smarter.wav';
import sneakthief_a from './assets/audio/sneakthief.wav';
import soreeyes_a from './assets/audio/soreeyes.wav';
import stayaway_a from './assets/audio/stayaway.wav';
import stayingsafe_a from './assets/audio/stayingsafe.wav';
import stupiddog_a from './assets/audio/stupiddog.wav';
import sweetroll_a from './assets/audio/sweetroll.wav';
import trouble_a from './assets/audio/trouble.wav';
import unnaturalweapon_a from './assets/audio/unnaturalweapon.wav';
import watchthemagic_a from './assets/audio/watchthemagic.wav';
import watchtheskies_a from './assets/audio/watchtheskies.wav';
import womanweapon_a from './assets/audio/womanweapon.wav';
import yesdovahkiin_a from './assets/audio/yesdovahkiin.wav';
import youagain_a from './assets/audio/youagain.wav';
import youlost_a from './assets/audio/youlost.wav';

function App() {
  const [phrase, setPhrase] = React.useState('');
  const [audio, setAudio] = React.useState('');
  const audioArr = [
    { name: 'nolollygaggin', audio: new Audio(nolollygaggin_a) },
    { name: 'alright', audio: new Audio(alright_a) },
    { name: 'arrowintheknee', audio: new Audio(arrowintheknee_a) },
    { name: 'banditraid', audio: new Audio(banditraid_a) },
    { name: 'bestoffense', audio: new Audio(bestoffense_a) },
    { name: 'bighammer', audio: new Audio(bighammer_a) },
    { name: 'bitlate', audio: new Audio(bitlate_a) },
    { name: 'breakneck', audio: new Audio(breakneck_a) },
    { name: 'burglarsandvampires', audio: new Audio(burglarsandvampires_a) },
    { name: 'castspells', audio: new Audio(castspells_a) },
    { name: 'citizen', audio: new Audio(citizen_a) },
    { name: 'crossmeelf', audio: new Audio(crossmeelf_a) },
    { name: 'curvedswords', audio: new Audio(curvedswords_a) },
    { name: 'cutitoff', audio: new Audio(cutitoff_a) },
    { name: 'disrespect', audio: new Audio(disrespect_a) },
    { name: 'dragons', audio: new Audio(dragons_a) },
    { name: 'eyeonyou', audio: new Audio(eyeonyou_a) },
    { name: 'fancymagic', audio: new Audio(fancymagic_a) },
    { name: 'favorthebow', audio: new Audio(favorthebow_a) },
    { name: 'fine', audio: new Audio(fine_a) },
    { name: 'fistsraised', audio: new Audio(fistsraised_a) },
    { name: 'furs', audio: new Audio(furs_a) },
    { name: 'getaway', audio: new Audio(getaway_a) },
    { name: 'gooddog', audio: new Audio(gooddog_a) },
    { name: 'gottothinking', audio: new Audio(gottothinking_a) },
    { name: 'guardduty', audio: new Audio(guardduty_a) },
    { name: 'hailsithis', audio: new Audio(hailsithis_a) },
    { name: 'ironsword', audio: new Audio(ironsword_a) },
    { name: 'kinsman', audio: new Audio(kinsman_a) },
    { name: 'knockdownahouse', audio: new Audio(knockdownahouse_a) },
    { name: 'littlecoin', audio: new Audio(littlecoin_a) },
    { name: 'lotwarmer', audio: new Audio(lotwarmer_a) },
    { name: 'manweapon', audio: new Audio(manweapon_a) },
    { name: 'mess', audio: new Audio(mess_a) },
    { name: 'mixpotions', audio: new Audio(mixpotions_a) },
    { name: 'movealong', audio: new Audio(movealong_a) },
    { name: 'notmyproblem', audio: new Audio(notmyproblem_a) },
    { name: 'orderjarl', audio: new Audio(orderjarl_a) },
    { name: 'putthatdown', audio: new Audio(putthatdown_a) },
    { name: 'safetravels', audio: new Audio(safetravels_a) },
    { name: 'smarter', audio: new Audio(smarter_a) },
    { name: 'sneakthief', audio: new Audio(sneakthief_a) },
    { name: 'soreeyes', audio: new Audio(soreeyes_a) },
    { name: 'stayaway', audio: new Audio(stayaway_a) },
    { name: 'stayingsafe', audio: new Audio(stayingsafe_a) },
    { name: 'stupiddog', audio: new Audio(stupiddog_a) },
    { name: 'sweetroll', audio: new Audio(sweetroll_a) },
    { name: 'trouble', audio: new Audio(trouble_a) },
    { name: 'unnaturalweapon', audio: new Audio(unnaturalweapon_a) },
    { name: 'watchthemagic', audio: new Audio(watchthemagic_a) },
    { name: 'watchtheskies', audio: new Audio(watchtheskies_a) },
    { name: 'womanweapon', audio: new Audio(womanweapon_a) },
    { name: 'yesdovahkiin', audio: new Audio(yesdovahkiin_a) },
    { name: 'youagain', audio: new Audio(youagain_a) },
    { name: 'youlost', audio: new Audio(youlost_a) },
  ];
  let currentAudio = '';

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * lines.length);
    setPhrase(lines[randomIndex].line);
    setAudio(lines[randomIndex].audio);
  }, []);

  const handleClick = () => {
    if (currentAudio.paused || !currentAudio.currentTime) {
      const randomIndex = Math.floor(Math.random() * lines.length);
      setPhrase(lines[randomIndex].line);
      setAudio(lines[randomIndex].audio, () => handlePlay);
    }
  };

  const handlePlay = () => {
    for (let i = 0; i < audioArr.length; i++) {
      if (audioArr[i].name === audio) {
        currentAudio = audioArr[i].audio;
      }
    }

    if (currentAudio.paused || !currentAudio.currentTime) {
      currentAudio.play();
    }
  };

  return (
    <div className="App">
      <h2>{phrase}</h2>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleClick}>Another one</button>
    </div>
  );
}

export default App;
