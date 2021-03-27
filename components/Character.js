import styled from "styled-components";
import Link from "next/link";

function Character({ character }) {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`}>
        <a>
          <img
            src={
              character.id === 28
                ? (character.image =
                    "https://static.wikia.nocookie.net/starwars/images/d/d9/MonMothma2.jpg/revision/latest/scale-to-width-down/340?cb=20070615223341")
                : character.id === 77
                ? (character.image =
                    "https://static.wikia.nocookie.net/swfanon/images/8/8a/3429_plageuis.jpg/revision/latest/top-crop/width/360/height/450?cb=20110308151336")
                : character.image
            }
            alt={character.name}
          />
        </a>
      </Link>
      <Link href={`/id/${character.id}.json`}>
        <a>
          <h1>{character.name}</h1>
        </a>
      </Link>
      <Decal />
    </CharacterContainer>
  );
}

export default Character;

const CharacterContainer = styled.div`
  border-radius: 6px;
  width: 266px;
  background-color: #282727;
  position: relative;
  transition: all 0.25s ease;
  overflow: hidden;
  z-index: 1;

  :hover {
    transform: scale(1.05);
  }

  > a > img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 266px;
    height: 300px;
    border-bottom: 2px solid #9e4f60;
  }

  > a > h1 {
    background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top@2x-1d6544f5cc3a.png");
    padding: 8px;
    display: inline-block;
    color: #ddd;
    font-size: 17px;
    text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;

    :hover {
      color: #9e4f60;
    }
  }
`;

const Decal = styled.div`
  background-image: url("https://static-mh.content.disney.io/starwars/assets/shared/decal@2x-937ac7c57dff.png");
  height: 47px;
  width: 47px;
  opacity: 0.06;
  position: absolute;
  bottom: -32px;
  right: 10px;
  background-size: 300% 200%;
  transform: scaleY(-1);
  background-position: -100% 0;
`;
