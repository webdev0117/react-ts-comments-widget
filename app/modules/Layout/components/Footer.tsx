import * as React from 'react';
import styled from 'styled-components';

import { translation } from 'services/translation';

interface IProps {
  className?: string;
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 30px 0 10px;
  padding-top: 10px;
  border-top: 1px solid #e7e9ed;
  a {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
  }

  > div {
    font-size: 0.8rem;
    a {
      color: ${(props) => props.theme.mutedColor};
      svg {
        fill: ${(props) => props.theme.mutedColor};
      }
      &:last-child {
        margin-left: 5px;
      }
    }
    svg {
      margin-right: 2px;
      width: 15px;
      height: 15px;
      fill: ${(props) => props.theme.primaryColor};
    }
  }

  > div,
  .v-logo {
    margin-bottom: 5px;
  }

  .v-logo {
    svg {
      width: 50px;
      fill: ${(props) => props.theme.mutedColor};
    }
    &:hover {
      svg {
        fill: ${(props) => props.theme.primaryColor};
      }
    }
  }

  @media (max-width: 320px) {
    .add-vuukle-link {
      display: none;
    }
  }

  @media (max-width: 200px) {
    flex-direction: column;
    align-items: center;
  }
`;

// tslint:disable max-line-length
const Footer: React.FC<IProps> = ({ className }) => (
  <StyledFooter className={className}>
    <div>
      {/* Add Vuukle Link */}
      <a
        href="https://vuukle.com/"
        target="_blank"
        rel="noopener nofollow"
        className="add-vuukle-link"
      >
        <svg viewBox="0 0 24 24">
          <path d="M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z" />
        </svg>
        <span>{translation.footer.addVuukle}</span>
      </a>
      {/* Privacy Link */}
      <a href="https://vuukle.com/terms.html" target="_blank" rel="noopener nofollow">
        <svg viewBox="0 0 24 24">
          <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
        </svg>
        <span>{translation.footer.privacy}</span>
      </a>
    </div>
    <a href="https://vuukle.com" target="_blank" rel="noopener nofollow" className="v-logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 686.04 216.06">
        <g>
          <path d="M91.87,144.95l3.7-9c7.2-17.73,14.51-35.45,21.71-53.18C124.17,66,131,49.06,137.85,32.26c3.09-7.46,6.07-14.93,9.26-22.39A2.49,2.49,0,0,1,149,8.52c10-.1,20-.1,29.83-.1.21,0,.41.21.82.31a13.2,13.2,0,0,1-.62,1.87c-10.18,24.15-20.47,48.31-30.66,72.46-10.8,25.5-21.5,51-32.3,76.51L92.9,214.3c-.31.73-1,1.14-1.65,1.76-.51-.62-1.34-1.14-1.65-1.76-4.84-10.88-9.57-21.77-14.3-32.55L54.63,134.17Q41.36,103.69,28,73C18.93,52.37,10,31.64.93,10.91.62,10.28.41,9.56,0,8.63a17.38,17.38,0,0,1,2.16-.1c9.77-.1,19.55,0,29.22-.1a3.13,3.13,0,0,1,3.29,2.18c8.33,19.8,16.67,39.7,25,59.5q14.81,35.14,29.53,70.08c.72,1.66,1.34,3.21,2.06,4.87a1.3,1.3,0,0,1,.62-.1Z" />
          <path d="M512.2,213.26H478.68a3.34,3.34,0,0,1-3.3-1.76c-7.53-11.39-15.06-22.67-22.59-34-.31-.52-.72-1-1.13-1.66-.31.1-.52.1-.62.21C447.42,180,443.91,184,440.4,188a4.29,4.29,0,0,0-.52,2.38V213a14.45,14.45,0,0,1-1.86.21c-8.67,0-17.33-.1-26,0-1.75,0-2.27-.52-2.27-2.17q.15-104.35,0-208.7c0-1.76.52-2.38,2.37-2.38,8.25.1,16.61.1,25,.1,2.79,0,2.79,0,2.79,2.69v146.9c.72-.62,1.13-.93,1.44-1.24,10.21-12.11,20.32-24.12,30.43-36.23a4.34,4.34,0,0,1,3.82-1.86c9.9.1,19.81,0,29.71,0h2.79c-.83,1-1.34,1.66-1.86,2.28l-33,38.1c-1.24,1.35-1.34,2.28-.31,3.83,12.79,18.84,25.48,37.89,38.07,56.73a13.31,13.31,0,0,1,1.24,2Z" />
          <path d="M679.11,198.59c-3.29,2.58-6.38,5.48-10,7.75-12.46,8-26.25,9.72-40.66,8.58a58.41,58.41,0,0,1-27.38-8.58c-12-7.55-19.76-18.3-22.75-32.26s-1.54-27.4,5.56-39.91a50.55,50.55,0,0,1,29.54-24c15.54-5,30.88-4.34,45.39,3.52,12.87,6.93,20.48,18.09,24.5,31.95A72.94,72.94,0,0,1,686,168.71c0,2.07-.41,2.79-2.57,2.69H608.19a21.38,21.38,0,0,0,.72,2.58c3.5,9.72,10.91,14.58,20.79,15.61,11.12,1.34,21.41-1.24,30.16-8.58.72-.62,1.34-.93,2.26-.1,5.35,5.48,10.81,11,16.26,16.44a4.59,4.59,0,0,1,.72,1.24ZM608.6,150h45.6c-1.54-10.65-10.71-17.68-22.34-17.58-13.18.1-21.31,8.17-23.26,17.58Z" />
          <path d="M191.68,109.43v2.91c0,19.45-.1,38.91,0,58.26,0,6.14,1.86,11.55,7.34,15,3.83,2.39,8.07,2.91,12.51,2.7,7.65-.42,14.17-2.91,18.1-10.09,2.38-4.58,2.79-9.67,2.79-14.77.1-17,0-34,0-51v-2.81a17.3,17.3,0,0,1,2.07-.21c8.58,0,17.17.1,25.85,0,1.65,0,2.07.52,2.07,2.08v99.24c0,1.14,0,2.08-1.55,2.08h-27.3c-.31,0-.52-.21-1-.31V200.77a1.74,1.74,0,0,1-.52-.21,16.37,16.37,0,0,0-1.24,1.56c-5.48,7.59-13.13,11.34-22.13,12.8-7.76,1.14-15.31.94-22.65-1.87-12.2-4.47-19.44-13.52-22.44-25.9a78.46,78.46,0,0,1-2-17.06c-.21-19.35,0-38.7-.1-58,0-2,.41-2.6,2.48-2.6,8.48.1,17,0,25.44,0Z" />
          <path d="M355.71,201c-2.9,2.81-5.48,5.83-8.58,8.23-6,4.48-13,6-20.27,6.35-10.34.52-20-1.67-28.13-8.54a35.68,35.68,0,0,1-12-20.62,86.87,86.87,0,0,1-1.65-17.08c-.21-19.06-.1-38.11-.1-57.06,0-2.81,0-2.81,2.69-2.81,8.38,0,16.65.1,25,0,2,0,2.38.52,2.38,2.5,0,19.26,0,38.53.1,57.79a27.33,27.33,0,0,0,1.24,8.23c1.55,5.21,5.38,8.43,10.65,9.68a28,28,0,0,0,15.51-.62c8.89-3,12.31-9.89,13.13-18.64.1-1.77.1-3.64.1-5.41V109.64c.93-.1,1.55-.21,2.07-.21,8.69,0,17.27.1,25.85,0,1.65,0,2.17.42,2.17,2.08q-.16,49.67,0,99.34c0,1.67-.62,2.08-2.17,2.08-8.58-.1-17.27-.1-25.85,0-1.65,0-2.17-.52-2.07-2.19.1-2.71,0-5.41,0-8.12a8,8,0,0,0-.1-1.67Z" />
          <path d="M527.64.21A19.84,19.84,0,0,1,530,.1c8.28,0,16.55,0,24.83-.1,1.72,0,2.32.41,2.32,2.48V210.57c0,2-.4,2.69-2.42,2.59-8.28-.1-16.65-.1-25,0-1.51,0-2-.52-2-2.07.1-11.8,0-23.49,0-35.18V.21Z" />
        </g>
      </svg>
    </a>
  </StyledFooter>
);

export default Footer;