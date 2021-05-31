import React, { Component } from "react";
import { Link } from "react-router-dom";
import { abc } from "./abc";
import Letter from "./Letter";

import "./alphabet.css";
import "../App.css";

import soundA from "./sounds/a.mp3";
import soundB from "./sounds/b.mp3";
import soundC from "./sounds/c.mp3";
import soundD from "./sounds/d.mp3";
import soundE from "./sounds/e.mp3";
import soundF from "./sounds/f.mp3";
import soundG from "./sounds/g.mp3";
import soundH from "./sounds/h.mp3";
import soundI from "./sounds/i.mp3";
import soundJ from "./sounds/j.mp3";
import soundK from "./sounds/k.mp3";
import soundL from "./sounds/l.mp3";
import soundM from "./sounds/m.mp3";
import soundN from "./sounds/n.mp3";
import soundO from "./sounds/o.mp3";
import soundP from "./sounds/p.mp3";
import soundQ from "./sounds/q.mp3";
import soundR from "./sounds/r.mp3";
import soundS from "./sounds/s.mp3";
import soundT from "./sounds/t.mp3";
import soundU from "./sounds/u.mp3";
import soundV from "./sounds/v.mp3";
import soundW from "./sounds/w.mp3";
import soundX from "./sounds/x.mp3";
import soundY from "./sounds/y.mp3";
import soundZ from "./sounds/z.mp3";
import soundSwedA from "./sounds/å.mp3";
import soundDotsA from "./sounds/ä.mp3";
import soundDotsO from "./sounds/ö.mp3";

class Alphabet extends Component {
  state = {
    abc: abc,
  };

  clickHandler = (abc_name) => {
    switch (abc_name) {
      case "Aa":
        let a_sound = new Audio(soundA);
        a_sound.play();
        break;
      case "Bb":
        let b_sound = new Audio(soundB);
        b_sound.play();
        break;
      case "Cc":
        let c_sound = new Audio(soundC);
        c_sound.play();
        break;
      case "Dd":
        let d_sound = new Audio(soundD);
        d_sound.play();
        break;
      case "Ee":
        let e_sound = new Audio(soundE);
        e_sound.play();
        break;
      case "Ff":
        let f_sound = new Audio(soundF);
        f_sound.play();
        break;
      case "Gg":
        let g_sound = new Audio(soundG);
        g_sound.play();
        break;
      case "Hh":
        let h_sound = new Audio(soundH);
        h_sound.play();
        break;
      case "Ii":
        let i_sound = new Audio(soundI);
        i_sound.play();
        break;
      case "Jj":
        let j_sound = new Audio(soundJ);
        j_sound.play();
        break;
      case "Kk":
        let k_sound = new Audio(soundK);
        k_sound.play();
        break;
      case "Ll":
        let l_sound = new Audio(soundL);
        l_sound.play();
        break;
      case "Mm":
        let m_sound = new Audio(soundM);
        m_sound.play();
        break;
      case "Nn":
        let n_sound = new Audio(soundN);
        n_sound.play();
        break;
      case "Oo":
        let o_sound = new Audio(soundO);
        o_sound.play();
        break;
      case "Pp":
        let p_sound = new Audio(soundP);
        p_sound.play();
        break;
      case "Qq":
        let q_sound = new Audio(soundQ);
        q_sound.play();
        break;
      case "Rr":
        let r_sound = new Audio(soundR);
        r_sound.play();
        break;
      case "Ss":
        let s_sound = new Audio(soundS);
        s_sound.play();
        break;
      case "Tt":
        let t_sound = new Audio(soundT);
        t_sound.play();
        break;
      case "Uu":
        let u_sound = new Audio(soundU);
        u_sound.play();
        break;
      case "Vv":
        let v_sound = new Audio(soundV);
        v_sound.play();
        break;
      case "Ww":
        let w_sound = new Audio(soundW);
        w_sound.play();
        break;
      case "Xx":
        let x_sound = new Audio(soundX);
        x_sound.play();
        break;
      case "Yy":
        let y_sound = new Audio(soundY);
        y_sound.play();
        break;
      case "Zz":
        let z_sound = new Audio(soundZ);
        z_sound.play();
        break;
      case "Åå":
        let swed_a_sound = new Audio(soundSwedA);
        swed_a_sound.play();
        break;
      case "Ää":
        let dots_a_sound = new Audio(soundDotsA);
        dots_a_sound.play();
        break;
      case "Öö":
        let dots_o_sound = new Audio(soundDotsO);
        dots_o_sound.play();
        break;

      default:
        console.log("Error from sound");
        break;
    }
  };

  render() {
    return (
      <>
        <div className="p-alphabet">
          <p>Press each letter to learn pronunciation</p>
        </div>
        <div className="abc-container">
          {this.state.abc.map((letter) => {
            return (
              <Letter
                key={letter.name}
                name={letter.name}
                play_sound={this.clickHandler.bind(this, letter.name)}
              />
            );
          })}
        </div>
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Alphabet;
