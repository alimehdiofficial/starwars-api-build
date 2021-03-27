import styled from "styled-components";

function SocialLink({ link, image }) {
  return (
    <Link href="https://www.facebook.com" image={image}>
      <span />
    </Link>
  );
}

export default SocialLink;

const Link = styled.a`
  transition: background-color 350ms;

  :hover > span {
    background-color: #ccc;
  }

  > span {
    display: block;
    background-color: #999;
    height: 21px;
    width: 21px;
    mask: ${(props) =>
      props.image && "url(" + props.image + ") no-repeat 50% 50%"};
    transition: background-color 350ms;
  }
`;
