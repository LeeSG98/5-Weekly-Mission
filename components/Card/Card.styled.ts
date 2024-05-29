import Image from 'next/image';
import styled from 'styled-components';

export const thumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s;
`;

export const Card = styled.li`
  position: relative;
  width: calc((100% - 40px) / 3);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--Linkbrary-bg);
  }
  &:hover ${thumbnail} {
    transform: scale(1.3);
  }

  @media (max-width: 1124px) {
    width: calc((100% - 20px) / 2);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const thumbnailWrap = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  @media (max-width: 767px) {
    height: 50vw;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
`;

export const TextTopWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateAgo = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #666666;
`;

export const KebabModal = styled.div`
  position: absolute;
  top: 17px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100px;
  background: var(--Linkbrary-white);
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);

  & button {
    width: 100%;
    padding: 7px 0;
  }

  & button:hover {
    background: var(--Linkbrary-gray10);
    color: var(--Linkbrary-primary);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  width: 100%;
  height: 49px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #333333;
`;

export const Star = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 34px;
  height: 34px;

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;
