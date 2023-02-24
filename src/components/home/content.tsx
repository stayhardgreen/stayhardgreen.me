import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

// components
import { Responsive } from "../common";

// styles
import * as SH from "./styles";

// icons
import * as Icons from "../svg";

type ArticleType = {
  id: number;
  title: string;
  description: string;
  slug: string;
  date: number;
};

type WE = {
  id: number;
  company: string;
  role: string;
  startDate: number;
  endDate?: number;
};

interface ArticleProps {
  id: number;
  title: string;
  description: string;
  slug: string;
  date: number;
}

const articles: ArticleType[] = [
  {
    id: 1,
    title: "My Git Aliases",
    description:
      "Here’s how I alias Git commands and increase my productivity.",
    slug: "my-git-aliases",
    date: 1677257390944,
  },
];

const wes: WE[] = [
  {
    id: 1,
    company: "Laravel",
    role: "Software Developer",
    startDate: 1677257390944,
  },
];

export const Content: React.FC = () => {
  return (
    <SH.ContentWrapper>
      <Responsive>
        <SH.ContentInner>
          <Articles />
          <WorkExperience />
        </SH.ContentInner>
      </Responsive>
    </SH.ContentWrapper>
  );
};

const Articles: React.FC = () => {
  return (
    <SH.ArticlesWrapper>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </SH.ArticlesWrapper>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <SH.WorkExperienceWrapper>
      <SH.WorkExperienceInner>
        <SH.WorkExperienceHeader>
          <Icons.ITool />
          <span className="ml-3 mt-1">Work</span>
        </SH.WorkExperienceHeader>

        <SH.WorkExperienceList>
          {wes.map((we) => (
            <li key={we.id}>
              <SH.WEItemWrapper>
                <SH.WEItemImage>
                  <Image
                    alt=""
                    src="https://james.brooks.page/_next/static/media/laravel.f36c5c21.svg"
                    width="50"
                    height="52"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    loading="lazy"
                  />
                </SH.WEItemImage>

                <SH.WEItemContent>
                  <SH.WEItemCompany>{we.company}</SH.WEItemCompany>
                  <SH.WEItemRole>{we.role}</SH.WEItemRole>
                  <SH.WEItemDate>
                    <time>{new Date(we.startDate).getFullYear()}</time>
                    <span aria-hidden="true"> — </span>
                    <time>
                      {we.endDate
                        ? new Date(we.endDate).getFullYear()
                        : "Present"}
                    </time>
                  </SH.WEItemDate>
                </SH.WEItemContent>
              </SH.WEItemWrapper>
            </li>
          ))}
        </SH.WorkExperienceList>

        <SH.WorkExperienceShowMore>
          See more
          <Icons.IArrow1Down />
        </SH.WorkExperienceShowMore>
      </SH.WorkExperienceInner>
    </SH.WorkExperienceWrapper>
  );
};

const Article: React.FC<ArticleProps> = (props) => {
  const { title, date, description, slug } = props;

  return (
    <SH.ArticleWrapper>
      <SH.ArticleTitleWrapper>
        <SH.ArticleHoverAnimation />
        <Link href={`/blog/${slug}`}>
          <SH.ArticleOverlay />
          <SH.ArticleTitle>{title}</SH.ArticleTitle>
        </Link>
      </SH.ArticleTitleWrapper>

      <SH.ArticleTimeWrapper>
        <SH.ArticleTimeLeftLine>
          <SH.ArticleTimeLeftLineInner />
        </SH.ArticleTimeLeftLine>
        {moment(date).format("LL")}
      </SH.ArticleTimeWrapper>

      <SH.ArticleDescription>{description}</SH.ArticleDescription>

      <SH.ArticleReadButton>
        Read article <Icons.IArrowRight />
      </SH.ArticleReadButton>
    </SH.ArticleWrapper>
  );
};
