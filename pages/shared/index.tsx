import { useGetFolder } from "@/src/folder/FolderDataAccess";
import { Layout } from "@/src/sharing/Layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/link/CardList";
import { FolderInfo } from "@/src/folder/Info";
import { ReadOnlyCard } from "@/src/link/ReadOnlyCard";
import { SearchBar } from "@/src/link/SearchBar";
import { useSearchLink } from "@/src/link/SearchLink/useSearchLink";

const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);

  return (
    <Layout>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        cardList={
          <CardList>
            {result?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

export default SharedPage;
