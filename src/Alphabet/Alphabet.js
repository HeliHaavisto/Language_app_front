import React, { Component } from "react";
import { Link } from "react-router-dom";
import { abc } from "./abc";
import Letter from "./Letter";

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
      case "a":
        let a_sound = new Audio(soundA);
        a_sound.play();
        break;
      case "b":
        let b_sound = new Audio(soundB);
        b_sound.play();
        break;
      case "c":
        let c_sound = new Audio(soundC);
        c_sound.play();
        break;
      case "d":
        let d_sound = new Audio(soundD);
        d_sound.play();
        break;
      case "e":
        let e_sound = new Audio(soundE);
        e_sound.play();
        break;
      case "f":
        let f_sound = new Audio(soundF);
        f_sound.play();
        break;
      case "g":
        let g_sound = new Audio(soundG);
        g_sound.play();
        break;
      case "h":
        let h_sound = new Audio(soundH);
        h_sound.play();
        break;
      case "i":
        let i_sound = new Audio(soundI);
        i_sound.play();
        break;
      case "j":
        let j_sound = new Audio(soundJ);
        j_sound.play();
        break;
      case "k":
        let k_sound = new Audio(soundK);
        k_sound.play();
        break;
      case "l":
        let l_sound = new Audio(soundL);
        l_sound.play();
        break;
      case "m":
        let m_sound = new Audio(soundM);
        m_sound.play();
        break;
      case "n":
        let n_sound = new Audio(soundN);
        n_sound.play();
        break;
      case "o":
        let o_sound = new Audio(soundO);
        o_sound.play();
        break;
      case "p":
        let p_sound = new Audio(soundP);
        p_sound.play();
        break;
      case "q":
        let q_sound = new Audio(soundQ);
        q_sound.play();
        break;
      case "r":
        let r_sound = new Audio(soundR);
        r_sound.play();
        break;
      case "s":
        let s_sound = new Audio(soundS);
        s_sound.play();
        break;
      case "t":
        let t_sound = new Audio(soundT);
        t_sound.play();
        break;
      case "u":
        let u_sound = new Audio(soundU);
        u_sound.play();
        break;
      case "v":
        let v_sound = new Audio(soundV);
        v_sound.play();
        break;
      case "w":
        let w_sound = new Audio(soundW);
        w_sound.play();
        break;
      case "x":
        let x_sound = new Audio(soundX);
        x_sound.play();
        break;
      case "y":
        let y_sound = new Audio(soundY);
        y_sound.play();
        break;
      case "z":
        let z_sound = new Audio(soundZ);
        z_sound.play();
        break;
      case "å":
        let swed_a_sound = new Audio(soundSwedA);
        swed_a_sound.play();
        break;
      case "ä":
        let dots_a_sound = new Audio(soundDotsA);
        dots_a_sound.play();
        break;
      case "ö":
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
