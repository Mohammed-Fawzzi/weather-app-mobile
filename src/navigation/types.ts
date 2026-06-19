import { NewsArticle } from "@/types/news";

export type NewsStackParamList = {
    NewsList: undefined;
    NewsDetail: { article: NewsArticle };
};
