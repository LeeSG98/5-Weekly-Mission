import Link from "next/link";
import Image from "next/image";
import facebookImg from "@/public/images/facebook.png";
import twitterImg from "@/public/images/twitter.png";
import youtubeImg from "@/public/images/youtube.png";
import instagramImg from "@/public/images/instagram.png";

const imgList = [facebookImg, twitterImg, youtubeImg, instagramImg];

interface Props {
  id: number;
  name: string;
  url: string;
}

export default function FooterSns({ id, name, url }: Props) {
  return (
    <li>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image src={imgList[id - 1]} alt={name} width="25" height="25" />
      </Link>
    </li>
  );
}
