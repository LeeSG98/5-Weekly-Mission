import { useGetFolders } from "@/src/folder/FolderDataAccess";
import { useGetLinks } from "@/src/link/DataAccess";
import { Layout } from "@/src/sharing/Layout";
import { FolderLayout } from "@/src/page-layout/FolderLayout";
import { FolderToolBar } from "@/src/folder/ToolBar";
import { SearchBar } from "@/src/link/SearchBar";
import { useState } from "react";
import { ALL_LINKS_ID } from "@/src/link/DataAccess/constant";
import { LinkForm } from "@/src/link/FormFeature";
import { CardList } from "@/src/link/CardListFeature";
import { SelectedFolderId } from "@/src/folder/type";
import { useSearchLink } from "@/src/link/SearchLink";
import { useIntersectionObserver } from "@/src/sharing/util";

const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] =
    useState<SelectedFolderId>(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);
  const { searchValue, handleChange, handleCloseClick, result } =
    useSearchLink(links);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();

  return (
    <Layout isSticky={false} footerRef={ref}>
      <FolderLayout
        linkForm={<LinkForm hideFixedLinkForm={isIntersecting} />}
        searchBar={
          <SearchBar
            value={searchValue}
            onChange={handleChange}
            onCloseClick={handleCloseClick}
          />
        }
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={result} />}
      />
    </Layout>
  );
};

export default FolderPage;
