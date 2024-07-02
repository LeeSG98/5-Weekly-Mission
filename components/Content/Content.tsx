import { ChangeEvent, useState, useEffect } from 'react';
import CardList from '../Card/CardList';
import Category from '../Category/Category';
import * as Styled from './Content.styled';
import { LinkType, CategoryType, SelectCategoryType } from '../../types/type';

interface ContentPropsType {
  categoryList?: CategoryType[];
  selectCategory?: SelectCategoryType;
  allLinkLoad?: () => Promise<void>;
  handleSelectCategory?: (id: number, name: string) => void;
  handleKebabClick?: (id: number) => void;
  selectCardId?: number;
  handleModalAction?: (action: string, subTitle?: string, url?: string) => void;
  linkList: LinkType[];
  option: boolean;
}

function Content({
  categoryList,
  selectCategory,
  handleSelectCategory,
  handleKebabClick,
  selectCardId,
  linkList,
  option,
  handleModalAction
}: ContentPropsType) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResultList, setSearchResultList] = useState<LinkType[]>([]);
  const categoryProps = {
    categoryList,
    selectCategory,
    handleSelectCategory,
    handleModalAction
  };

  useEffect(() => {
    if (!searchValue && linkList) {
      // 인풋 값이 없고, 링크가 있을 때 실행
      setSearchResultList(linkList);
    }
  }, [linkList]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchChange = (value: string): void => {
    if (linkList) {
      if (!searchValue) {
        setSearchResultList(linkList);
        return;
      }
      const lowerSearchValue = value.toLocaleLowerCase();
      const searchResult = linkList?.filter(
        (list) =>
          list.title?.toLowerCase().includes(lowerSearchValue) ||
          list.description?.toLowerCase().includes(lowerSearchValue)
      );
      setSearchResultList(searchResult);
    }
  };

  useEffect(() => {
    // searchValue 바뀌면 일정시간 후 함수 호출
    const timer = setTimeout(() => {
      handleSearchChange(searchValue);
    }, 500); // 500ms(0.5초) 딜레이

    // 클린업 함수 => 타이머 클리어
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <Styled.Content>
      <form>
        <Styled.Label htmlFor="content--search">링크 검색</Styled.Label>
        <Styled.SearchInput
          value={searchValue}
          onChange={handleSearchValue}
          id="content--search"
          type="search"
          placeholder="🔍  링크를 검색해 보세요."
        />
      </form>
      {searchValue && (
        <Styled.SearchResult>
          <Styled.SearchValue>{searchValue}</Styled.SearchValue>으로 검색한 결과입니다.
        </Styled.SearchResult>
      )}
      {option && <Category {...categoryProps} />}
      <CardList
        handleKebabClick={handleKebabClick}
        selectCardId={selectCardId}
        linkList={searchResultList}
        option={option}
        handleModalAction={handleModalAction}
      />
    </Styled.Content>
  );
}

export default Content;