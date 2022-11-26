import React from "react";
import { Container } from "../../styles/Common.style";
import { ArticleCard, ArticleCardContent, ArticleGrid, ArticleWrapper } from "./Articles.style";
import MoneyImg from "../../images/image-currency.jpg";
import { H2, H4, H5, Para } from "../../styles/Typography.style";
const Articles = () => {
  return (
    <div>
      <Container>
        <ArticleWrapper>
          <H2>Latest Articles</H2>
          <ArticleGrid>
            <ArticleCard>
              <img src={MoneyImg} alt='' />
              <ArticleCardContent>
                <H5>Author Name</H5>
                <H4>Lorem ipsum dolor</H4>
                <Para>Lorem ipsum </Para>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt='' />
              <ArticleCardContent>
                <H5>Author Name</H5>
                <H4>Lorem ipsum dolor</H4>
                <Para>Lorem ipsum </Para>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt='' />
              <ArticleCardContent>
                <H5>Author Name</H5>
                <H4>Lorem ipsum dolor</H4>
                <Para>Lorem ipsum </Para>
              </ArticleCardContent>
            </ArticleCard>
            <ArticleCard>
              <img src={MoneyImg} alt='' />
              <ArticleCardContent>
                <H5>Author Name</H5>
                <H4>Lorem ipsum dolor</H4>
                <Para>Lorem ipsum </Para>
              </ArticleCardContent>
            </ArticleCard>
          </ArticleGrid>
        </ArticleWrapper>
      </Container>
    </div>
  );
};

export default Articles;
