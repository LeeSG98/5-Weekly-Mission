import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/src/user/DataAccess";
import { Footer } from "@/src/sharing/Footer";
import { NavigationBar } from "@/src/sharing/NavigationBar";
import { ReactNode, RefObject } from "react";

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

export const Layout = ({
  children,
  isSticky = true,
  footerRef,
}: LayoutProps) => {
  const { data } = useGetUser();
  const profile = data
    ? { email: data.email, imageSource: data.profileImageSource }
    : null;

  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx("main")}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};