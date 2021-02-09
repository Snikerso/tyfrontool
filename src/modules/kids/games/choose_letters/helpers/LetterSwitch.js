import React from 'react';
import { ReactComponent as Afill } from 'assets/games/choose_letters/letters/A_fill.svg';
import { ReactComponent as Aafill } from 'assets/games/choose_letters/letters/Ą_fill.svg';
import { ReactComponent as Bfill } from 'assets/games/choose_letters/letters/B_fill.svg';
import { ReactComponent as Cfill } from 'assets/games/choose_letters/letters/C_fill.svg';
import { ReactComponent as Ćfill } from 'assets/games/choose_letters/letters/Ć_fill.svg';
import { ReactComponent as Dfill } from 'assets/games/choose_letters/letters/D_fill.svg';
import { ReactComponent as Efill } from 'assets/games/choose_letters/letters/E_fill.svg';
import { ReactComponent as Ęfill } from 'assets/games/choose_letters/letters/Ę_fill.svg';
import { ReactComponent as Ffill } from 'assets/games/choose_letters/letters/F_fill.svg';
import { ReactComponent as Gfill } from 'assets/games/choose_letters/letters/G_fill.svg';
import { ReactComponent as Hfill } from 'assets/games/choose_letters/letters/H_fill.svg';
import { ReactComponent as Ifill } from 'assets/games/choose_letters/letters/I_fill.svg';
import { ReactComponent as Jfill } from 'assets/games/choose_letters/letters/J_fill.svg';
import { ReactComponent as Kfill } from 'assets/games/choose_letters/letters/K_fill.svg';
import { ReactComponent as Lfill } from 'assets/games/choose_letters/letters/L_fill.svg';
import { ReactComponent as Łfill } from 'assets/games/choose_letters/letters/Ł_fill.svg';
import { ReactComponent as Mfill } from 'assets/games/choose_letters/letters/M_fill.svg';
import { ReactComponent as Nfill } from 'assets/games/choose_letters/letters/N_fill.svg';
import { ReactComponent as Ńfill } from 'assets/games/choose_letters/letters/Ń_fill.svg';
import { ReactComponent as Ofill } from 'assets/games/choose_letters/letters/O_fill.svg';
import { ReactComponent as Ófill } from 'assets/games/choose_letters/letters/Ó_fill.svg';
import { ReactComponent as Pfill } from 'assets/games/choose_letters/letters/P_fill.svg';
import { ReactComponent as Rfill } from 'assets/games/choose_letters/letters/R_fill.svg';
import { ReactComponent as Sfill } from 'assets/games/choose_letters/letters/S_fill.svg';
import { ReactComponent as Śfill } from 'assets/games/choose_letters/letters/Ś_fill.svg';
import { ReactComponent as Tfill } from 'assets/games/choose_letters/letters/T_fill.svg';
import { ReactComponent as Ufill } from 'assets/games/choose_letters/letters/U_fill.svg';
import { ReactComponent as Wfill } from 'assets/games/choose_letters/letters/W_fill.svg';
import { ReactComponent as Xfill } from 'assets/games/choose_letters/letters/X_fill.svg';
import { ReactComponent as Yfill } from 'assets/games/choose_letters/letters/Y_fill.svg';
import { ReactComponent as Zfill } from 'assets/games/choose_letters/letters/Z_fill.svg';
import { ReactComponent as Żfill } from 'assets/games/choose_letters/letters/Ż_fill.svg';
import { ReactComponent as Źfill } from 'assets/games/choose_letters/letters/Ź_fill.svg';

// empty
import { ReactComponent as Aempty } from 'assets/games/choose_letters/letters/A_empty.svg';
import { ReactComponent as Aaempty } from 'assets/games/choose_letters/letters/Ą_empty.svg';
import { ReactComponent as Bempty } from 'assets/games/choose_letters/letters/B_empty.svg';
import { ReactComponent as Cempty } from 'assets/games/choose_letters/letters/C_empty.svg';
import { ReactComponent as Ćempty } from 'assets/games/choose_letters/letters/Ć_empty.svg';
import { ReactComponent as Dempty } from 'assets/games/choose_letters/letters/D_empty.svg';
import { ReactComponent as Eempty } from 'assets/games/choose_letters/letters/E_empty.svg';
import { ReactComponent as Ęempty } from 'assets/games/choose_letters/letters/Ę_empty.svg';
import { ReactComponent as Fempty } from 'assets/games/choose_letters/letters/F_empty.svg';
import { ReactComponent as Gempty } from 'assets/games/choose_letters/letters/G_empty.svg';
import { ReactComponent as Hempty } from 'assets/games/choose_letters/letters/H_empty.svg';
import { ReactComponent as Iempty } from 'assets/games/choose_letters/letters/I_empty.svg';
import { ReactComponent as Jempty } from 'assets/games/choose_letters/letters/J_empty.svg';
import { ReactComponent as Kempty } from 'assets/games/choose_letters/letters/K_empty.svg';
import { ReactComponent as Lempty } from 'assets/games/choose_letters/letters/L_empty.svg';
import { ReactComponent as Łempty } from 'assets/games/choose_letters/letters/Ł_empty.svg';
import { ReactComponent as Mempty } from 'assets/games/choose_letters/letters/M_empty.svg';
import { ReactComponent as Nempty } from 'assets/games/choose_letters/letters/N_empty.svg';
import { ReactComponent as Ńempty } from 'assets/games/choose_letters/letters/Ń_empty.svg';
import { ReactComponent as Oempty } from 'assets/games/choose_letters/letters/O_empty.svg';
import { ReactComponent as Óempty } from 'assets/games/choose_letters/letters/Ó_empty.svg';
import { ReactComponent as Pempty } from 'assets/games/choose_letters/letters/P_empty.svg';
import { ReactComponent as Rempty } from 'assets/games/choose_letters/letters/R_empty.svg';
import { ReactComponent as Sempty } from 'assets/games/choose_letters/letters/S_empty.svg';
import { ReactComponent as Śempty } from 'assets/games/choose_letters/letters/Ś_empty.svg';
import { ReactComponent as Tempty } from 'assets/games/choose_letters/letters/T_empty.svg';
import { ReactComponent as Uempty } from 'assets/games/choose_letters/letters/U_empty.svg';
import { ReactComponent as Wempty } from 'assets/games/choose_letters/letters/W_empty.svg';
import { ReactComponent as Xempty } from 'assets/games/choose_letters/letters/X_empty.svg';
import { ReactComponent as Yempty } from 'assets/games/choose_letters/letters/Y_empty.svg';
import { ReactComponent as Zempty } from 'assets/games/choose_letters/letters/Z_empty.svg';
import { ReactComponent as Żempty } from 'assets/games/choose_letters/letters/Ż_empty.svg';
import { ReactComponent as Źempty } from 'assets/games/choose_letters/letters/Ź_empty.svg';

const LetterSwitch = (props, ref) => {
  const {
    item,
    handleDrag,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    isTouched,
    id,
    letter,
  } = props;
  console.log(item.heightLetter);
  if (item.isTarget === true) {
    switch (item.letter) {
      case 'A':
        return (
          <Aempty
            id={id}
            letter={item.letter}
            ref={ref}
            style={{
              height: item.heightLetter,
            }}
          />
        );
      case 'Ą':
        return (
          <Aaempty
            id={id}
            height={item.heightLetter}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'B':
        return (
          <Bempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'C':
        return (
          <Cempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ć':
        return (
          <Ćempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'D':
        return (
          <Dempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'E':
        return (
          <Eempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ę':
        return (
          <Ęempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'F':
        return (
          <Fempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'G':
        return (
          <Gempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'H':
        return (
          <Hempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'I':
        return (
          <Iempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'J':
        return (
          <Jempty
            id={id}
            letter={item.letter}
            ref={ref}
            style={{
              height: item.heightLetter,
            }}
          />
        );
      case 'K':
        return (
          <Kempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'L':
        return (
          <Lempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ł':
        return (
          <Łempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'M':
        return (
          <Mempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'N':
        return (
          <Nempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ń':
        return (
          <Ńempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'O':
        return (
          <Oempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ó':
        return (
          <Óempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'P':
        return (
          <Pempty
            id={id}
            height={item.heightLetter}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'R':
        return (
          <Rempty
            id={id}
            height={item.heightLetter}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'S':
        return (
          <Sempty
            id={id}
            height={item.heightLetter}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ś':
        return (
          <Śempty
            id={id}
            height={item.heightLetter}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'T':
        return (
          <Tempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'U':
        return (
          <Uempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'W':
        return (
          <Wempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'X':
        return (
          <Xempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Y':
        return (
          <Yempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Z':
        return (
          <Zempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ż':
        return (
          <Żempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ź':
        return (
          <Źempty
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );

      default:
        return <p>O</p>;
    }
  } else if (item.isTarget === false) {
    switch (item.letter) {
      case 'A':
        return (
          <Afill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ą':
        return (
          <Aafill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'B':
        return (
          <Bfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'C':
        return (
          <Cfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ć':
        return (
          <Ćfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'D':
        return (
          <Dfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'E':
        return (
          <Efill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ę':
        return (
          <Ęfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'F':
        return (
          <Ffill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'G':
        return (
          <Gfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'H':
        return (
          <Hfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'I':
        return (
          <Ifill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'J':
        return (
          <Jfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'K':
        return (
          <Kfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'L':
        return (
          <Lfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ł':
        return (
          <Łfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'M':
        return (
          <Mfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'N':
        return (
          <Nfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'O':
        return (
          <Ofill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ó':
        return (
          <Ófill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'P':
        return (
          <Pfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'R':
        return (
          <Rfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'S':
        return (
          <Sfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ś':
        return (
          <Śfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'T':
        return (
          <Tfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'U':
        return (
          <Ufill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'W':
        return (
          <Wfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Y':
        return (
          <Yfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Z':
        return (
          <Zfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ż':
        return (
          <Żfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );
      case 'Ź':
        return (
          <Źfill
            id={id}
            letter={item.letter}
            ref={ref}
            height={item.heightLetter}
          />
        );

      default:
        return <p>O</p>;
    }
  } else {
    switch (item.letter) {
      case 'A':
        return (
          <Afill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              display: 'block',
              position: 'absolute',
              left: `${item.location.x}`,
              top: `${item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ą':
        return (
          <Aafill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}`,
              top: `${item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'B':
        return (
          <Bfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'C':
        return (
          <Cfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ć':
        return (
          <Ćfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'D':
        return (
          <Dfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}`,
              top: `${item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'E':
        return (
          <Efill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}px`,
              top: `${item.location.y}px`,
              zIndex: 0,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ę':
        return (
          <Ęfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}px`,
              top: `${item.location.y}px`,
              zIndex: 0,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'F':
        return (
          <Ffill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'G':
        return (
          <Gfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'H':
        return (
          <Hfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'I':
        return (
          <Ifill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'J':
        return (
          <Jfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'K':
        return (
          <Kfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}`,
              top: `${item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'L':
        return (
          <Lfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x} `,
              top: `${item.location.y} `,
              zIndex: 1,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ł':
        return (
          <Łfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x} `,
              top: `${item.location.y} `,
              zIndex: 1,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'M':
        return (
          <Mfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'N':
        return (
          <Nfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ń':
        return (
          <Ńfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'O':
        return (
          <Ofill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ó':
        return (
          <Ófill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'P':
        return (
          <Pfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'R':
        return (
          <Rfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'S':
        return (
          <Sfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ś':
        return (
          <Sfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'T':
        return (
          <Tfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'U':
        return (
          <Ufill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'W':
        return (
          <Wfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'X':
        return (
          <Xfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Y':
        return (
          <Yfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Z':
        return (
          <Zfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ż':
        return (
          <Żfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.isTarget === false ? null : item.location.x}`,
              top: `${item.isTarget === false ? null : item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      case 'Ź':
        return (
          <Źfill
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            height={item.heightLetter}
            style={{
              position: 'absolute',
              left: `${item.location.x}`,
              top: `${item.location.y}`,
            }}
            id={id}
            letter={item.letter}
            ref={ref}
          />
        );
      default:
        return <p>O</p>;
    }
  }
};

export default LetterSwitch;

// style={{
//   position: 'absolute',
//   left: item.location.x,
//   top: item.location.y,
// }}
